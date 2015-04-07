'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.products
 * @description
 * # products
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('products', function ($http) {
    // Service logic

    var baseUrl = 'http://localhost:8000/api/products/';

    return {

      list: function () {
        return $http.get(baseUrl);
      }

     };

  });
