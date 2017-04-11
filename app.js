var express = require('express');
var path  = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build/static')));
app.use('bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {

	  res.sendFile(__dirname + '/build/index.html');

})



app.listen(4738, function () {

	  console.log('Web resume listening on port 4738!');
	  
})
