var UI = require('./views/ui');



//this is app.js
// Google Map Stuff

var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMarker: function(distillery){
    var marker = new google.maps.Marker({
      position: distillery.coords,
      map: this.googleMap
    });

    var div = document.createElement("div");
    var header = document.createElement('h1');
    var button = document.createElement("button")
    var description = document.createElement("p")
    var website = document.createElement("a")

    // this will be used to push id to customers array.
    button.onclick = function(){console.log(distillery.name)}
    header.innerText = distillery.name;
    description.innerText = distillery.description;
    website.innerText = distillery.website;
    website.href = distillery.website;
    button.innerText = "Add to bucketlist";
    button.id = distillery._id;

    div.appendChild(header);
    div.appendChild(description);
    div.appendChild(website);
    div.appendChild(button);


    var infoWindow = new google.maps.InfoWindow({content: div});
    google.maps.event.addListener(marker, "click", function(){
      // console.log(content);
      infoWindow.open(this.googleMap, marker);

    },this);
  }
}


var GeoCoder = function(address, mapWrapper){
  this.mapWrapper =  mapWrapper;
  this.address = address;
};

GeoCoder.prototype = {
  geoCode: function(){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.address;

    var geoCoderThis = this;
    makeRequest(url, function(){   
      // console.log(this.responseText);
      var resultsObj = JSON.parse(this.responseText);
       
      var coords = resultsObj.results[0].geometry.location;
      geoCoderThis.mapWrapper.googleMap.setCenter(coords);
      // debugger;
    });
  }
};

var searchButtonClick = function(mainMap){
  console.log("clicked");
  var input = document.querySelector('#SearchLocation');
  var address = input.value;
  // debugger;

  var gc = new GeoCoder(address, mainMap);
  gc.geoCode();
};


//this function will make a call to our api, get all distilleries and use the callback provide to drop markers for them all on the mainmap.
var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = (function(){
    if(this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var whisky_distilleries = JSON.parse(jsonString);
    
    for(distillery of whisky_distilleries){
      callback(distillery);
    }
  });
  request.send();
}

//the below function creates the map and puts it in the container, uses a an inner function to call addmarker on the mainmap and will take in coords when it is called, coords are provided when this function is used in makeRequest
var showMap = function(){
  var urlToOurApi = "http://localhost:3000/api/locations";
  var container = document.getElementById("GoogleMap");
  var center = {
    lat: 56.490671,
    lng: -4.202646
  };
  var zoom = 7;
  var mainMap = new MapWrapper(container, center, zoom);
  var urlToOurApi = "http://localhost:3000/api/locations";
  makeRequest(urlToOurApi, (function(coords, content) {
    mainMap.addMarker(coords, content);
  }));
}

var app = function(){
  //calls show map, this populates map and drops pins. we may look at moving some of this out to seperate models and views.
  showMap();

  new UI();

  var searchButton = document.querySelector("#SearchButton");
  searchButton.onclick = function(){
    searchButtonClick(mainMap); //this line isn't working. How do I refer to the mapwrapper object in teh above showMap function?

};

window.onload = app;

