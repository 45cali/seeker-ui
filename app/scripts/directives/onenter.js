'use strict';

/**
 * @ngdoc directive
 * @name seekerUiApp.directive:onenter
 * @description
 * # onenter
 */
angular.module('seekerUiApp')
  .directive('onenter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.onenter);
          });

          event.preventDefault();
        }
      });
    };
  });


