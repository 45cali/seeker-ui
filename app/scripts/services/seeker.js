'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.seeker
 * @description
 * # seeker
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('seeker', function ($http) {
    // Service logic
    // ...

    var urlBase = 'http://localhost:8000/api/seek/?format=jsonp&callback=JSON_CALLBACK';

    // Public API here
    return {

      lookup: function (hostnameId,alertId) {

        if (angular.isUndefined(alertId) || (alertId === '')) {

          $http.jsonp(urlBase).
            success(function(data, status, headers, config, response) {

            }).
            error(function(data, status, headers, config) {

            });

        }
        else {
          return 'hostname: ' + hostnameId + ' - alert: ' + alertId;
        }
      }
    };
  });
