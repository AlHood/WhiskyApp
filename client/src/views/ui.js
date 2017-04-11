
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
};


var showBucketItem = function(location){
  console.log(location);
  var toDoList = document.getElementById('choosenDistilleries');
  var name = document.getElementById('listItem');
  
  name.innerText = location.name;
  toDoList.appendChild(name);
};

var populateBucketList = function(user_items){
  var toDoList = document.getElementById("choosenDistilleries");
  var locationsUrl = "http://localhost:3000/api/locations/";

  for (distilleryid of user_items.bucket_list){
    makeRequestForLocation(locationsUrl + distilleryid, showBucketItem);
  }
};


var populateVisitedList = function(){

  var completedTours= document.getElementById("completedTours");
  var listItem = this.parentNode;
     for (var i=0; i< completedTours.children.length; i++){
       bindTaskEvents(completedTours.children[i]);
     };
        completedTours.appendChild(listItem);
        bindTaskEvents(listItem, toDoList);
};


//New distillery item
var createEachPickedElement=function(){

  var listItem=document.createElement("li");
  var checkBox=document.createElement("input");
  var label=document.createElement("label");
  var deleteButton=document.createElement("button");

  
  checkBox.type="checkbox";
  deleteButton.innerText="Delete";
  deleteButton.className="delete";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
};

var deleteDistillery = function(){
//parentNode is referring to the UL - don't know if I'm using this right?
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};

var taskIncomplete=function(){
    console.log("Incomplete Task...");

    for (var i=0; i<incompleteTaskHolder.children.length;i++){

      //bind events to list items chldren(tasksCompleted)
      bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
    }
//Mark task as incomplete.
  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem=this.parentNode;
      list.appendChild(listItem);
      bindTaskEvents(listItem,taskCompleted);
}



var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
  console.log("bind list item events");
//select ListItems children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var deleteButton = taskListItem.querySelector("button.delete");

      deleteButton.onclick = deleteTask;
      checkBox.onchange = checkBoxEventHandler;
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