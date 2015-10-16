var angular = require('angular');
angular.module('blogApp.home.controllers', [])
.controller('HomeController', ['$scope', function ($scope) {
    $scope.hola = "Hola mis amigos";
}]);
