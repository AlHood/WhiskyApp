//this is whiksyeQuery.js
var MongoClient = require('mongodb').MongoClient;

var WhiskyQuery = function(){
  this.url = 'mongodb://localhost:27017/whisky';
};


WhiskyQuery.prototype = {
  all:function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('whisky_distilleries');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
}


module.exports = WhiskyQuery;