
var List = require('../models/user.js')

var makeRequestForUser = function(url, callback){
  console.log('makeRequestForuserCalled');
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = (function(){
    if (this.status !== 200){
      return;
    }
    var jsonString = this.responseText;
    var user_picks = JSON.parse(jsonString);
    console.log(user_picks[0].bucket_list);
    callback(user_picks[0]);
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
};

var showBucketItem = function(location){
  console.log(location);
  var bucketList = document.getElementById("listDistilleries");
  var listItem = document.createElement('li');
  var name = document.createElement('p');
  name.className = 'distillery_name';
  name.innerText = location.name;
  
  listItem.appendChild(name);

  bucketList.appendChild(listItem);
};

var populateBucketList = function(location){

  console.log(location);
  console.log(location.name);

  var bucketList = document.getElementById("listDistilleries");
  var locationsUrl = "http://localhost:3000/api/locations/";

  for(distilleryid of location.bucket_list){
    makeRequestForLocation(locationsUrl + distilleryid, showBucketItem);
  }
};

// //New distillery item
// var createEachPickedElement=function(location){

//   return ui;
// };


var populateVisitedList = function(){
  var completedTours= document.getElementById("completedTours");
  var listItem = this.parentNode;
  for (var i=0; i< completedTours.children.length; i++){
   bindTaskEvents(completedTours.children[i]);
 };
 completedTours.appendChild(listItem);
 bindTaskEvents(listItem, toDoList);
};


var UI = function(){
  // thethingy.innerHTML = '';
  // populateVisitedList();
  // populateBucketList();
  makeRequestForUser("http://localhost:3000/api/users/", populateBucketList);
};

module.exports = UI;