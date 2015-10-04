var angular = require('angular');
require('angular-resource');
var services = angular.module('blogApp.home.services', ['ngResource']);

services.factory('pruebaService', ['$http', '$q', function ($http, $q) {
    function get_posts() {
        var deffered = $q.defer();
        $http.get('http://angular-todo-app.herokuapp.com/api').success(function (data) {
            deffered.resolve(data);
        });
        return deffered.promise;
    }
    return {
        get_posts: get_posts
    };
}]);
