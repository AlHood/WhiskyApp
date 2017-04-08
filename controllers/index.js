//this is index.js

var express = require('express');
var router = express.Router();


router.use('/api/loations', require('./locations'));



module.exports = router;