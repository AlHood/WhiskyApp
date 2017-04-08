var locations = require('../client/src/models/locations');
var Location = require('../client/src/models/location');

var express = require('express');
var locationRouter = express.Router();
var bodyParser = require('body-parser');

locationRouter.get('/', function(req, res){
  res.json(locations);
});

module.exports = locationRouter;





