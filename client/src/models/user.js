//some basic layout of how a usershould look.
// we will use this when we require access to the functions a user object will have. 
var MongoClient = require('mongodb').MongoClient;


var User = function(options) {
  this.name = options.name ;
  this.bucket_list = options.bucket_list || [];
  this.visited_list = options.visited_list || [];
}

User.prototype = {
  //will need some functions to push and remove from arrays. start with just being able to push in to bucket_list.
  addBucket:function(location){


    this.bucket_list.push(location.id);

    this.user.updateUser;
  },

  removeBucket:function(location){

  },

  addVisited:function(location){

  },

  removeVisited:function(location){

  }

}

module.exports = User;