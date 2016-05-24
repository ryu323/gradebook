angular.module('GradebookApp').controller('GradebookCtrl', GradebookCtrl);

function GradebookCtrl(gradebookFactory) {

  var vm = this;

  vm.students = {};
  // students = {
  //   101: {
  //    firstName: "Bobby",
  //    lastName: "Jenkins",
  //    scores: {
  //      "Chapter 1 Test": 99,
  //      "Chapter 2 Test": 98,
  //      ...
  //    }
  //   },
  //   102: ...
  // }

  vm.tests = {};
  // tests = {
  //   "Chapter 1 Test": {
  //     date: "1/1/2016",
  //     scores: [99, 68, 88, 100, ...]
  //   },
  //   "Chapter 2 Test": ...
  // }

  vm.getAverage = function(collection) {
    var array = [];
    if (!Array.isArray(collection)) {
      for (var key in collection) {
        if (collection[key] !== '') {
          array.push(collection[key]);
        }
      }
    } else {
      array = collection;
    }
    var sum = array.reduce(function(a, b) {
      return a + b;
    }, 0);
    return Math.round(sum/array.length) || '';
  }

  vm.loadData = function() {
    gradebookFactory.getStudents()
      .then(function(fetchedStudents) {
        gradebookFactory.saveStudents(fetchedStudents, vm.students);
      })
      .then(function() {
        gradebookFactory.getScores()
          .then(function(fetchedScores) {
            gradebookFactory.saveScores(fetchedScores, vm.students, vm.tests);
          });
      });
  }

  vm.loadData();

}
