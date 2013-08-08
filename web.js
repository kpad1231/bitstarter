var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = "index.html";
var buffer = new Buffer(64);

app.get('/', function(request, response) {
//  response.send('Hello World2!');
  buffer = fs.readFileSync(infile);
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
