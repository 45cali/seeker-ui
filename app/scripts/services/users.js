'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.users
 * @description
 * # users
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('users', function ($http, $q) {
    // Service logic

    var baseUrl = 'http://localhost:8000/api/users/';

    return {
      // get a list of users
      list: function () {

       return $http.get(baseUrl);

      }



    }


  });
