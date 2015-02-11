'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
