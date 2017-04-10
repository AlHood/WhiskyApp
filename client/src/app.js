//this is app.js


// Google Map Stuff

var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {
  addMaker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    google.maps.event.addListener(marker, "click", function(){
      console.log("clicked");

    },this);
  }
}
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
      callback(distillery.coords);
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
  makeRequest(urlToOurApi, (function(coords) {
    mainMap.addMaker(coords);
  }));
}

var app = function(){
  //calls show map, this populates map and drops pins. we may look at moving some of this out to seperate models and views.
  showMap();
};

window.onload = app;

