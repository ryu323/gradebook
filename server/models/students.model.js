var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String
});

var StudentModel = mongoose.model('Student', studentSchema)
module.exports = StudentModel;
