var Student = require('../models/students.model.js');

exports.addStudent = function(req, res) {
  var student = new Student({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });

  student.save(function(err) {
    if(err) {
      console.log("Error saving student: ", err);
    }
    res.status(200).send(student);
  });
}

exports.getStudents = function(req, res) {
  Student.find({}, function(err, response) {
    if (err) {
      console.log("Error fetching all students: ", err);
    }
    res.status(200).send(response);
  });
}
