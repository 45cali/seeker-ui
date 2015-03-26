'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.sop
 * @description
 * # sop
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('sop', function ($http) {
    // Service logic
    // ...

    var baseUrl = 'http://localhost:8000/api/lookup/';

    return {

      list: function () {
        return $http.get(baseUrl);
      },

      get: function (sopId) {
        return $http.get(baseUrl+sopId);
      }



    }

























  });
