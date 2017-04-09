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

module.exports = userRouter;
