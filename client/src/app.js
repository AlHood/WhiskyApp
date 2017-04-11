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
    button.onclick = function(){user.addBucket(distillery._id);
      console.log(user);
      console.log(user_id);
      makePutRequest("http://localhost:3000/api/users/"+user_id, user)
      // console.log(user_items[0]);
      console.log(user);
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
  
  document.querySelector("#CurrentLocationBtn").addEventListener('click', function(){
      navigator.geolocation.getCurrentPosition(function(position) {
        var coords = { lat: position.coords.latitude , lng: position.coords.longitude }
        console.log(coords);
        mainMap.googleMap.setCenter(coords);
        mainMap.googleMap.setZoom(9)
      });
    });
}


var app = function(){
  //calls show map, this populates map and drops pins. we may look at moving some of this out to seperate models and views.
  showMap();

  new UI();

};

window.onload = app;

