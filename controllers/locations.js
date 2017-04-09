var locations = require('../client/src/models/locations');
var Location = require('../client/src/models/location');

var express = require('express');
var locationRouter = express.Router();
var bodyParser = require('body-parser');

var WhiskyQuery = require('../client/src/models/whiskyQuery');
var query = new WhiskyQuery();


locationRouter.use(bodyParser.json());
locationRouter.use(bodyParser.urlencoded({extended: true}));

locationRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

//this is route to get a user by object id, logic is handled in userQuery model.
locationRouter.get('/:id',function(req, res){
  var id = req.params.id;
  //leaving console log here till front end is upand running.
  console.log('Retrieving location: ' + id);
  query.findById(function(results){
    res.json(results);
  }, id);
});

module.exports = locationRouter;





