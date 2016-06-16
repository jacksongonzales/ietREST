'use strict';

/**
 * @ngdoc function
 * @name ietRestApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the ietRestApp
 */

var app = angular.module('ietRestApp');
var activitiesArr = [];

app.controller('ActivitiesCtrl', ['$scope', '$interval', 'getData', function ($scope, $interval, getData) {
  var fetchWeather = function() {
    getData.getWeather().then(function(data) {
      var city = data.city.name;
      var country = data.city.country;
      var verb = "post";
      var title = "The weather in some part of ";

      for(var i=0; i<(data.list).length; i++) {
        var currObj = data.list[i];
        var temp = currObj.main.temp;
        var description = currObj.weather[0].description;
        var date = currObj.dt_txt;
        var id = currObj.dt;
        var activity =
          {
            "activity": {
              "actor": {
                "id": id,
                "cityName": city
              },
              "object": {
                "temp": temp,
                "description": description
              },
              "verb": verb,
              "title": title,
              "published": date
            }
          }
          if  (!(isDuplicate(id))) {
            activitiesArr.push(activity);
          }
      }
      console.log(activitiesArr);
    });
  };

  var isDuplicate = function (currId) {
    if (activitiesArr.length == 0)
      return false;

    for(var i=0; i<activitiesArr.length; i++) {
      if (currId == activitiesArr[i].activity.actor.id) {
        return true;
      }
    }

    return false;
  }

  fetchWeather();
  $interval(fetchWeather, 10000);
  $scope.weatherData = activitiesArr;
}]);
