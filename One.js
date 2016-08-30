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
app.listen(3000)
