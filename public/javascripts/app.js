angular.module('myApp', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/index',
    controller: IndexCtrl
  }).when('/edit/:id', {
    templateUrl: '../partials/edit',
    controller: EditCtrl
  });
  $locationProvider.html5Mode(true);
}]);

function IndexCtrl($scope) {
  $scope.names = [
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'},
    {id: 4, name: 'name4'}
  ];
}

function EditCtrl($scope, $routeParams) {
  $scope.name = {
    name: 'name' + $routeParams.id
  }
}