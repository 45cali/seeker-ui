'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.groups
 * @description
 * # groups
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('groups', function ($http) {
    // Service logic

    var baseUrl = 'http://localhost:8000/api/groups/';

    return {
      // get a list of users
      list: function () {
        return $http.get(baseUrl);
      },
      get: function(id) {
        return $http.get(baseUrl+id);
      }

    };



  });
