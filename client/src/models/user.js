//some basic layout of how a usershould look.
// we will use this when we require access to the functions a user object will have. 
// var MongoClient = require('mongodb').MongoClient;


var User = function(options) {
  this.name = options.name ;
  this.bucket_list = options.bucket_list || [];
  this.visited_list = options.visited_list || [];
}

User.prototype = {
  // will need some functions to push and remove from arrays. start with just being able to push in to bucket_list.
  addBucket:function(id){
if(this.bucket_list.includes(id) === false) {
   this.bucket_list.push(id);}

  },

  removeBucket:function(id){
var index = this.bucket_list.indexOf(id);
this.bucket_list.splice(index);

  },

  addVisited:function(id){
    var index = this.bucket_list.indexOf(id);
    var insert = (this.bucket_list.splice(index));
    this.visited_list.push(insert[0]);


  },

  removeVisited:function(id){
    if(this.visited_list.includes(id)) {
    var index = this.visited_list.indexOf(id);
    this.visited_list.splice(index);}
  }

}

module.exports = User;