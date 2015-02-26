'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:SopsCtrl
 * @description
 * # SopsCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('SopsCtrl', function ($scope,checkJwt) {
    checkJwt.validate();


  });
