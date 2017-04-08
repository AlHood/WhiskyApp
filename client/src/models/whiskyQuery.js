//this is whiksyeQuery.js
var MongoClient = require('mongodb').MongoClient;

var WhiskyQuery = function(){
  this.url = 'mongodb://localhost:27017/whisky';
};





module.exports = WhiskyQuery;