'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.users
 * @description
 * # users
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('users', function ($http, backendHost) {
    // Service logic
    var path = backendHost.backendPath();

    var baseUrl = path.baseUrl+'/api/users/';

    return {
      // get a list of users
      list: function () {

       return $http.get(baseUrl);

      }



    };


  });
