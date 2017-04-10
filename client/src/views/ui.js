
var List = require('../models/user.js')
// var userQuery = require('../models/userQuery.js');


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


var populateBucketList = function(user_items){


  var list = document.querySelector('#tabOne');

  for (distillery of user_items.bucket_list){
    console.log(user_items.bucket_list);
    var name = document.createElement('p');
    var region = document.createElement('p');
    name.innerText = distillery.name;
    region.innerText = distillery.region;

    bucket_list.appendChild(name);
    bucket_list.appendChild(region);


    var button = document.createElement('button');
    button.innerText = "Add to Visited!"; 
  }
};


// var populateVisitedList = function(){

//   var visited_list = document.querySelector('#tabTwo');
//     visited_list.addVisited();

    
  
// }

 var UI = function(){
  console.log('hi');
  // populateVisitedList();
  // populateBucketList();
  makeRequestForUser("http://localhost:3000/api/users/", populateBucketList);
 }

module.exports = UI;