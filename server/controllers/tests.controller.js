var Test = require('../models/tests.model.js');

exports.addTest = function(req, res) {
  var test = new Test({
    test_name: req.body.test_name,
    date: req.body.date
  });

  test.save(function(err) {
    if (err) {
      console.log("Error saving test: ", err);
    }
    res.status(200).send(test);
  });
};

exports.addScore = function(req, res) {
  var query = {
    test_name: req.body.test_name
  };

  var update = {
    $push: {
      scores: {
        id: req.body.id,
        score: req.body.score
      }
    }
  };

  // creates a new document if no document matches the query
  var options = {
    upsert: true
  }

  Test.findOneAndUpdate(query, update, options, function(err) {
    if (err) {
      console.log("Error saving score: ", err);
    }
    res.status(200).send(req.body)
  })
};
