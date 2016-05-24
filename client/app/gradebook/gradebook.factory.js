angular.module('GradebookApp').factory('gradebookFactory', gradebookFactory);

function gradebookFactory($http) {

  function getStudents() {
    return $http({
      method: 'GET',
      url: 'api/students/getStudents'
    }).then(function(res) {
      return res.data;
    });
  }

  function getScores() {
    return $http({
      method: 'GET',
      url: 'api/tests/getScores'
    }).then(function(res) {
      return res.data;
    });
  }

  function saveStudents(studentsData, studentsObj) {
    studentsData.forEach(function(student) {
      var id = student.id;
      var studentData = {
        firstName: student.first_name,
        lastName: student.last_name,
        scores: {}
      };
      studentsObj[id] = studentData;
    })
  }

  function saveScores(scoresData, studentsObj, testsObj) {
    scoresData.forEach(function(test) {
      var testName = test.test_name;
      var testData = {
        date: test.date,
        scores: []
      }
      testsObj[testName] = testData;

      for (var key in studentsObj) {
        studentsObj[key]['scores'][testName] = '';
      };

      var testScores = test.scores;
      testScores.forEach(function(score) {
        var studentId = score.id;
        var studentScore = score.score;
        testsObj[testName].scores.push(studentScore);
        studentsObj[studentId]['scores'][testName] = studentScore;
      });
    });
  }

  return {
    getStudents: getStudents,
    getScores: getScores,
    saveStudents: saveStudents,
    saveScores: saveScores
  }

}
