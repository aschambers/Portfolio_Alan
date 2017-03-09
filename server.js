var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.listen(8000, function() {
	console.log('Server is listening on port 8000');
});