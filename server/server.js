var express = require('express');
var path = require('path');
var compress = require('compression');

var app = express();
app.use(compress());
app.use(express.static(path.join(__dirname + './../')));

app.get('/', function (req, res) {
	res.sendFile('index.html');
})

app.listen(4000, function() {
	console.log('server spinning on port 4000!');
})