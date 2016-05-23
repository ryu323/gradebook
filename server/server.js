var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '..', 'client')));

app.listen(port, function() {
  console.log("Listening on port: ", port);
});
