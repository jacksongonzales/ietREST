var dataService = angular.module('dataService', []);

dataService.factory('getData', ['$http', function($http) {
  return {
    getWeather: function() {
      return $http.get("http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=4493568c36ca120429addd929a651947")
      .then(function(result) {
        return result.data;
      });
    }
  }
}]);
