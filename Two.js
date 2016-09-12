var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname + '/'
    }
  res.sendFile('index.html', options).end();
})
app.post('/', function(req, res){
    console.log('post request recieved')
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
    res.status(200).end();
})
app.listen(3000)
