'use strict';

/**
 * @ngdoc function
 * @name ietRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ietRestApp
 */
var app = angular.module('ietRestApp');

app.controller('MainCtrl', ['$scope', 'getData', function ($scope, getData) {
  getData.getWeather().then(function(data) {
    $scope.weatherData = data.list;
  }); 
}]);


