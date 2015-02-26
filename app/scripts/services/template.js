'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.template
 * @description
 * # template
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('template', function ($http) {
    var baseUrl = 'http://localhost:8000/api/templates/';

    return {
      list: function(){
           return $http.get(baseUrl);
      }
    }




  });
