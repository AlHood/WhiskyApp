
var List = require('../models/user.js')

var makeRequestForUser = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = (function(){
    if (this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var user_items = JSON.parse(jsonString);
    console.log(user_items[0]);
    callback(user_items[0]);
  });
  request.send();
};

var makeRequestForLocation = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = (function(){
    if (this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var location = JSON.parse(jsonString);
    callback(location);
  });
  request.send();
}
var showBucketItem = function(location){
  console.log(location);
  var listForTabOne = document.getElementById('tabOne');
  var name = document.createElement('p');
  name.innerText = location.name;

  listForTabOne.appendChild(name);

}

var populateBucketList = function(user_items){


  var list = document.querySelector('#tabOne');
var locationsUrl = "http://localhost:3000/api/locations/";

  for (distilleryid of user_items.bucket_list){
    makeRequestForLocation(locationsUrl + distilleryid, showBucketItem);
  }
};


// var populateVisitedList = function(){

//   var visited_list = document.querySelector('#tabTwo');
//     visited_list.addVisited();

    
  
// }

 var UI = function(){
  var thethingy = document.getElementById('tabOne');
  // thethingy.innerHTML = '';
  console.log('hi');
  // populateVisitedList();
  // populateBucketList();
  makeRequestForUser("http://localhost:3000/api/users/", populateBucketList);
 }

module.exports = UI;