var app = angular.module("ucayApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'templates/index.html',
    controller: 'UcayMainCtrl',
  })
  .when('/:page', {
    templateUrl: function(param){
      return 'templates/' + param.page + '.html';
    },
    controller: 'UcayContentCtrl'
  });

});

app.controller("UcayMainCtrl", function($scope, $http) {
  $scope.ucay = {};
  $http.get('data.json')
    .then(function(ucayData){
      $scope.ucay = ucayData.data;
    });
});

app.controller("UcayContentCtrl", function($scope) {
});