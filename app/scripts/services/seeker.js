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

    var baseUrl = 'http://localhost:8000/api/seek/?';
    // Public API here
    return {

      lookup: function (hostnameId,alertId) {

        if (angular.isUndefined(alertId) || (alertId === '')) {

          return $http.get(baseUrl+'hostname='+hostnameId);


        }
        else {
         return $http.get(baseUrl+'hostname=' + hostnameId + '&alert=' + alertId);

        }
      }
    };
  });
