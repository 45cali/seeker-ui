'use strict';

/**
 * @ngdoc directive
 * @name seekerUiApp.directive:autoFocus
 * @description
 * # autoFocus
 */
angular.module('seekerUiApp')
  .directive('autoFocus', function ($timeout) {
    return {
      restrict: 'AC',
      link: function(_scope, _element) {
        $timeout(function(){
          _element[0].focus();
        }, 0);
      }
    };
  });