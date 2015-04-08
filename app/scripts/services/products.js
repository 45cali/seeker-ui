'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.products
 * @description
 * # products
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('products', function ($http, backendHost) {
    // Service logic
    var path = backendHost.backendPath();

    var baseUrl = path.baseUrl+'/api/products/';

    return {

      list: function () {
        return $http.get(baseUrl);
      }

     };

  });
