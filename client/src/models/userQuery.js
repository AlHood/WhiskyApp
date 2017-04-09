var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// user object not yet used here.
// var User = require('./user');
var UserQuery = function(){
  this.url = 'mongodb://localhost:27017/users';
};


UserQuery.prototype = {
//this returns all users.
  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('whisky_users');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  },
  //this will find a user by object id.
  findById: function(onQueryFinished, id) {
    console.log({'_id':new ObjectID(id)})
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('whisky_users');
      collection.find({'_id': new ObjectID(id)}).toArray(function(err, docs){
        onQueryFinished(docs[0]);
      });
    });
  }

};





module.exports = UserQuery;



