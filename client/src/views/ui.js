//this is ui.js

var List = require('../models/user.js')



var populateBucketList = function(){

  var bucket_list = document.querySelector('#tabOne');
   bucket_list.addBucket();
  for (distillery of ??){
    var name = document.createElement('p');
    var region = document.createElement('p');
    name.innerText = ??.name;
    region.innerText = ??.region;

    bucket_list.appendChild(name);
    bucket_list.appendChild(region);


    var button = document.createElement('button');
    button.innerText = "DONE!"; 
  }
};


var populateVisitedList = function(){

  var visited_list = document.querySelector('#tabTwo');
    visited_list.addVisited();

    
  
}

 var ui = function(){

 }


window.onload = ui;