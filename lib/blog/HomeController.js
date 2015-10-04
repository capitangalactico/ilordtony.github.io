var angular = require('angular');
require('./HomeService');

angular.module('blogApp.home.controllers', ['blogApp.home.services'])
    .controller('HomeController', ['$scope', 'pruebaService', function ($scope, pruebaService) {
        pruebaService.get_posts().then(function (data) {
            console.log(data);
            $scope.titulo = data.valor[0];
        });
    }]);
