var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(require('./controllers'));

app.use(express.static('client/build'));
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
