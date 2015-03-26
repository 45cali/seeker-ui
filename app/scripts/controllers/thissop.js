'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:ThisSopCtrl
 * @description
 * # ThisSopCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('ThisSopCtrl', function ($scope, $location, sop, checkJwt, $routeParams) {

    checkJwt.validate();

    var thisId = $routeParams.sopId;

    var getInstance = sop.get(thisId)
      .success( function (data, status) {
           $scope.thisSop = data;
           console.log($scope.thisSop);
      })
      .error( function (data, status) {

      })
      .then( function (data) {




      });










    $scope.goBack = function () {
     $location.url('/sops');
   };

  });
