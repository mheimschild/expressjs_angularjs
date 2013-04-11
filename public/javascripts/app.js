angular.module('myApp', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/index',
    controller: IndexCtrl
  }).when('/add', {
    templateUrl: '../partials/edit',
    controller: AddCtrl
  }).when('/edit/:id', {
    templateUrl: '../partials/edit',
    controller: EditCtrl
  }).when('/delete/:id', {
    controller: DeleteCtrl
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

function AddCtrl($scope) {
  console.log("add called");
  $scope.name = {
    id: $scope.names.length + 1,
    name: 'name' + ($scope.names.length + 1)
  }
  $scope.names.push($scope.name);
}

function EditCtrl($scope, $routeParams) {
  $scope.name = {
    id: $routeParams.id,
    name: 'name' + $routeParams.id
  }
}

function DeleteCtrl($scope, $location) {
  $location.path('/')
}