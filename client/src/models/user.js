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
if(this.includes(id) === false) {
   bucket_list.push(id);}

  },

  removeBucket:function(id){
var index = this.bucket_list.findIndex(id);
this.bucket_list.splice(index);

  },

  addVisited:function(id){
    var index = this.bucket_list.findIndex(id);
    var splice = this.bucket_list.splice(index);
this.visited_list.push(splice);

  },

  removeVisited:function(id){
    var index = this.visited_list.findIndex(id);
    this.visited_list.splice(index);
  }

}

module.exports = User;