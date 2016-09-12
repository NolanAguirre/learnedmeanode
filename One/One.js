var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname + '/'
    }
  res.sendFile('index.html', options)
})
app.post('/', function(req, res){
    console.log('post request recieved')
})
app.listen(3000)
