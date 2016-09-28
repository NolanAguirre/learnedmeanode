var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json

app.post('/', upload.array(), function (req, res, next) {
  console.log(req.body);
  console.log(req.body.file);
  //res.json(req.body);
});
app.use('/',router);
router.head('/#121212', function(req, res, next) {
        console.log('get request recieved @ /#')
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname + '/'
    }
  res.sendFile('index.html', options);
})
app.post('/#', function(req, res){
    console.log('post request recieved')
    console.log(req.data);
    res.status(200).end();
})
app.delete('/', function(req, res){
    console.log('delete request recieved')
    res.status(200).end();
})
app.head('/', function(req, res){
    console.log('head request recieved')
    res.status(200).end();
})
app.put('/', function(req, res){
    console.log('put request recieved')
})
app.listen(3000)
