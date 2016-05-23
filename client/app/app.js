var GradebookApp = angular.module('GradebookApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
                .state('gradebook', {
                  url: '/',
                  templateUrl: './app/gradebook/gradebook.template.html',
                  controller: 'GradebookCtrl as gradebook'
                });
  $urlRouterProvider.otherwise('/');
})
