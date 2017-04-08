//this is app.js


// Google Map Stuff

var mapWrapper = function(container, center, zoom){
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

    var app = function(){
      var container = document.getElementById("GoogleMap");
      var center = { lat: , lng:},
    };

    var zoom = 10;

    var mainMap = new MapWrapper(container, center, zoom);


    // ---------------------------------------------------------

var UI = require('./views/ui');



var app = function() {
new UI();

}




window.onload = app;