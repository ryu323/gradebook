var path = require('path');
var express = require('express');

var app = express();


// connect database
var mongoose = require('mongoose');

if (!process.env.USERNAME) {
  var config = require('../config.js');
}
var dbUser = process.env.USERNAME || config.username;
var dbPassword = process.env.PASSWORD || config.password;
var dbHost = 'mongodb://' + dbUser + ':' + dbPassword + '@ds011863.mlab.com:11863/gradebook-web-app';
mongoose.connect(dbHost);

// serve static files
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..' , 'node_modules')));


// route handling
var jsonParser = require('body-parser').json();
var StudentsController = require('./controllers/students.controller.js');
var TestsController = require('./controllers/tests.controller.js');

app.post('/api/students/addStudent', jsonParser, StudentsController.addStudent);
app.post('/api/tests/addTest', jsonParser, TestsController.addTest);
app.post('/api/tests/addScore', jsonParser, TestsController.addScore);

app.get('/api/students/getStudents', jsonParser, StudentsController.getStudents);
app.get('/api/tests/getScores', jsonParser, TestsController.getScores);


// start server
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Listening on port: ", port);
});
