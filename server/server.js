var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// routing for client files
app.use('/', express.static(path.join(__dirname, '..', 'client')));

// routing for node modules
app.use('/node_modules', express.static(path.join(__dirname, '..' , 'node_modules')));

app.listen(port, function() {
  console.log("Listening on port: ", port);
});
