'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
