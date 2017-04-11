
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
  var name = document.getElementById("listItem");
  
  name.innerText = location.name;
  bucketList.appendChild(name);
};

var populateBucketList = function(location){
  console.log(location.name);
  var bucketList = document.getElementById("listDistilleries");
  var locationsUrl = "http://localhost:3000/api/locations/";
   var listItem = document.createElement("li");
   var label = document.createElement("label");
   label.setText = location;
   var deleteButton = document.createElement("button");
   var addButton = document.createElement("button");

   deleteButton.innerText="Delete";
   deleteButton.className="delete";

   listItem.appendChild(label);
   listItem.appendChild(deleteButton);
   listItem.appendChild(addButton);
    bucketList.appendChild(listItem);
  // for (distilleryid of user_picks){
  //   makeRequestForLocation(locationsUrl + distilleryid, showBucketItem);
  // }
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
  var thethingy = document.getElementById("tabOne");
  // thethingy.innerHTML = '';
  console.log('hi');
  // populateVisitedList();
  // populateBucketList();
  makeRequestForUser("http://localhost:3000/api/users/", populateBucketList);
};

module.exports = UI;