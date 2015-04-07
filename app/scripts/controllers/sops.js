'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:SopsCtrl
 * @description
 * # SopsCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('SopsCtrl', function ($scope,checkJwt,sop,$location) {
    checkJwt.validate();

    sop.list().
      success(function () {
        //console.log('success');
      }).
      error(function () {
        //console.log('error');
      }).
      then(function (response) {
        console.log('then'+response);
        $scope.sopCollection = response.data;

      });

    angular.element('.focusHere').focus();

    $scope.goToThisSop = function (id) {
      $location.path('/sops/'+id);
    };

    $scope.goToCreateSop = function () {
      $location.path('create/sops/');
    };
  });
