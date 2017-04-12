var UI = require('./views/ui');
var User = require('./models/user.js');
var user;
var user_id;


//this is app.js
// Google Map Stuff

var makeRequestForUser = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = (function(){
    if (this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var user_items = JSON.parse(jsonString);
    user_id = user_items[0]._id;
    user = new User(user_items[0]);
  });
  request.send();
};

var makePutRequest = function(url, payload, callback){
  console.log(payload);
  var request = new XMLHttpRequest();
  request.open("PUT", url);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(payload));
}

var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addYouareHere: function(coords){
    console.log(coords);
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    });

    var circle = new google.maps.Circle({
      map: this.googleMap,
      radius: 16*1000,    // 10 miles in metres
      fillColor: '#ffd700'
    });
    circle.bindTo('center', marker, 'position');

  },
  addMarker: function(distillery){
    var marker = new google.maps.Marker({
      position: distillery.coords,
      map: this.googleMap,
      icon: "http://localhost:3000/images/whiskyGlass.png"
    });

    var div = document.createElement("div");
    div.classList.add("infowindowdiv");
    var header = document.createElement('h1');
    var button = document.createElement("button")
    var description = document.createElement("p")
    var website = document.createElement("a")

    // this will be used to push id to customers array.
    button.onclick = function(){user.addBucket(distillery._id);

// at this moment, we need to get the coords. maybe distillery.coords? 
localStorage.setItem("prevCoords", JSON.stringify(distillery.coords) );


console.log(user);
console.log(user_id);
makePutRequest("http://localhost:3000/api/users/"+user_id, user)
      // console.log(user_items[0]);
      console.log(user);
      location.reload();
    }

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
    // console.log(geoCoderThis);
    geoCodeMakeRequest(url, function(){   
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


var geoCodeMakeRequest = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send();
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
  makeRequestForUser("http://localhost:3000/api/users/");


  var urlToOurApi = "http://localhost:3000/api/locations";
  var container = document.getElementById("GoogleMap");

// alternatively, this should load co-ords from local storage

var center= {
  lat: 56.490671,
  lng: -4.202646
};

var localStoragecenter = localStorage.getItem("prevCoords");


if(localStoragecenter !== null) {
  console.log(localStoragecenter)
  center = JSON.parse(localStoragecenter);
  console.log(center);

};

var zoom = 7;
var mainMap = new MapWrapper(container, center, zoom);
var urlToOurApi = "http://localhost:3000/api/locations";
makeRequest(urlToOurApi, (function(coords, content) {
  mainMap.addMarker(coords, content);
}));

  // Care, functions beginning searchLocation.onkeypress = function(){
// and    document.querySelector("#CurrentLocationBtn").addEventListener('click', function(){
// were added at teh same time. Check for conflicts.
var searchLocation = document.querySelector("#SearchLocation");
searchLocation.onkeypress = function(){
  if(event.which ==13){
    searchButtonClick(mainMap); //this line isn't working. How do I refer to the mapwrapper object in teh above showMap function?
  }
};

document.querySelector("#CurrentLocationBtn").addEventListener('click', function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    var coords = { lat: position.coords.latitude , lng: position.coords.longitude }
    console.log(coords);
    mainMap.googleMap.setCenter(coords);
    mainMap.googleMap.setZoom(9);
    mainMap.addYouareHere(coords);
  });
  // debugger;


});

};


var app = function(){
  //calls show map, this populates map and drops pins. we may look at moving some of this out to seperate models and views.
  showMap();

  new UI();

  

};

window.onload = app;

