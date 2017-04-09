//this is whiksyeQuery.js
var MongoClient = require('mongodb').MongoClient;
//required in objectID to use findbyid.
var ObjectID = require('mongodb').ObjectID;
var WhiskyQuery = function(){
  this.url = 'mongodb://localhost:27017/whisky';
};


WhiskyQuery.prototype = {
  //this is getting all locations 
  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('whisky_distilleries');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  },
  //this is getting a location based on its object id, this may be refactored relater to use a place_id
  findById: function(onQueryFinished, id) {
    //logging out the id for now till front end is hooked up.
    console.log({'_id':new ObjectID(id)})
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('whisky_distilleries');
      collection.find({'_id': new ObjectID(id)}).toArray(function(err, docs){
        onQueryFinished(docs[0]);
      });
    });
  }
}


module.exports = WhiskyQuery;