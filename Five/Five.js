var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var routes = require('./routes/resume.js');

app.use(bodyParser.json()); // for parsing application/json

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', routes.resume);

app.post('/', upload.array(), function(req, res, next) {
    console.log(req.body);
    console.log(req.body.file);
    //res.json(req.body);
});

app.post('/', function(req, res) {
    console.log('post request recieved')
    console.log(req.data);
    res.status(200).end();
})
app.delete('/', function(req, res) {
    console.log('delete request recieved')
    res.status(200).end();
})
app.head('/', function(req, res) {
    console.log('head request recieved')
    res.status(200).end();
})
app.put('/', function(req, res) {
    console.log('put request recieved')
    res.status(200).end();
})
app.listen(3000)
