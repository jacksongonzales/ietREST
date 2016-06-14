'use strict';

/**
 * @ngdoc function
 * @name ietRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ietRestApp
 */
angular.module('ietRestApp')
  .controller('MainCtrl', function ($scope, $http) {
  $http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=4493568c36ca120429addd929a651947")
  .then(function(response) {
    $scope.weatherData = response.data.list;
  });
});
