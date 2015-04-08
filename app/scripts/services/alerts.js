'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.alerts
 * @description
 * # alerts
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('alerts', function ($http, backendHost) {
    // Service logic
    // ...

    var path = backendHost.backendPath();

    var baseUrl = path.baseUrl+'/api/alerts/';

    // Public API here
    return {
      get: function () {
        return $http.get(baseUrl);
      },
      listify: function (dictData) {

        var alertList = [];

        for (var i in dictData) {
         // console.log(dictData[i].alert);
          alertList.push(dictData[i].alert);
        }

        return alertList;


      }
    };
  });
