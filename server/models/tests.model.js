var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
  test_name: String,
  date: {
    type: Date,
    default: Date.now
  },
  scores: [
    {
      id: Number,
      score: Number
    }
  ]
});

var TestModel = mongoose.model('Test', testSchema)
module.exports = TestModel;
