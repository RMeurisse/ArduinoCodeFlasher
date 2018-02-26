var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
const port = 8080;

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.get(/^(.+)$/, function(req, res) {
	res.sendfile(__dirname + req.params[0]);
});

app.listen(port, function() {
	console.log('Listening on ' + port);
});
