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
  }
}

var app = function(){
  var container = document.getElementById("GoogleMap");
  var center = {
    lat: 55.8576092,
    lng: -4.244469
  };
  var zoom = 10;
  var mainMap = new MapWrapper(container, center, zoom);
  // mainMap.addMaker({
  //   lat: 55.8576092,
  //   lng: -4.244469
  // });
};

window.onload = app;

