'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.groups
 * @description
 * # groups
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('groups', function ($http, backendHost) {
    // Service logic
    var path = backendHost.backendPath();

    var baseUrl = path.baseUrl+'/api/groups/';

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
