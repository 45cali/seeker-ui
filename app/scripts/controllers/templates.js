'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:TemplatesCtrl
 * @description
 * # TemplatesCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('TemplatesCtrl', function ($scope,checkJwt,template,$location) {
    checkJwt.validate();

    template.list().
      success(function (response) {
         console.log('success');
       }).
      error(function (response) {
        console.log('error');
      }).
      then(function (response) {
        console.log('then'+response);
        $scope.templateCollection = response.data;

      });

    angular.element('.focusHere').focus();

    $scope.goToThisTemplate = function (id) {
      $location.path('/templates/'+id);
    }
  });
