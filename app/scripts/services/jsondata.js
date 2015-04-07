'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.jsonData
 * @description
 * # jsonData
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('jsonData', function ($location, $http) {
    // Service logic
    // ...

    var baseUrl = 'data/';
    return {

      get: function (file) {
        console.log('jsonData path: '+baseUrl+file);

        return $http.get(baseUrl+file);
      }

    };
  });
