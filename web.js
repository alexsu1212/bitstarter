var express = require('express');
var fs = require('js');

var app = express.createServer(express.logger());

var content = fs.readFileSync('index.html');
content = content.toString();

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
