'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('AboutCtrl', function ($scope, $http) {

    $http.get('/data/apiInfo.json')
      .success( function (data) {
         console.log(data);
      });
  });
