var locations = require('../client/src/models/locations');
var Location = require('../client/src/models/location');

var express = require('express');
var locationRouter = express.Router();
var bodyParser = require('body-parser');

locationRouter.get('/:id', function(req, res){
  res.json({data: locations[req.params.id]});

});


module.exports = locationRouter;



