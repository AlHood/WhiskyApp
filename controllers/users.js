var express = require('express');
var userRouter = express.Router();
var bodyParser = require('body-parser');
//currently User model isnt used here.
// var User = require('../client/src/models/user.js');
var UserQuery = require('../client/src/models/userQuery.js');
var query = new UserQuery();
// we need the body parse to parse body reqs
userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({extended: true}));

//this is route to get all users, logic is handled in userQuery model.
userRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

//this is route to get a user by object id, logic is handled in userQuery model.
userRouter.get('/:id',function(req, res){
  var id = req.params.id;
  //leaving console log here till front end is upand running.
  console.log('Retrieving user: ' + id);
  query.findById(function(results){
    res.json(results);
  }, id);
});


module.exports = userRouter;
