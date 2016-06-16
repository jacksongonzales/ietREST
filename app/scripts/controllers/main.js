'use strict';

/**
 * @ngdoc function
 * @name ietRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ietRestApp
 */
var app = angular.module('ietRestApp');

app.controller('MainCtrl', ['$scope', '$interval', 'getData', function ($scope, $interval, getData) {
  var fetchWeather = function() {
    getData.getWeather().then(function(data) {
      $scope.weatherData = data.list;
    });
  };

  fetchWeather();
  $interval(fetchWeather, 10000);

}]);


