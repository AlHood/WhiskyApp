//this is index.js

var express = require('express');
var router = express.Router();


router.use('/api/locations', require('./locations'));
router.use('/api/users', require('./users'));



module.exports = router;