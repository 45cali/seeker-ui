'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:ThisSopCtrl
 * @description
 * # ThisSopCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('ThisSopCtrl', function ($scope, $location, sop, checkJwt, $routeParams, checkPerm) {
    // verify user has a valid token
    checkJwt.validate();
    // ge sop ID
    var thisId = $routeParams.sopId;
    // call sop.get()
    var getInstance = sop.get(thisId)
      .success( function (data, status) {
           // bind data to $scope.thisSop
           $scope.thisSop = data;
           // check if current user is apart of the owner group
           checkPerm.isGroup(data.owner)
             .then( function (bool) {
                     //console.log(bool);
                     // bind boolean value to $scope.isGroup
                     $scope.isGroup = bool;
             });

      })
      .error( function (data, status) {

      })
      .then( function (data) {

      });

    // function to go back to /sops
    $scope.goBack = function () {
     $location.url('/sops');
    };

    // function to go to sop edit page
    $scope.editSop = function (sopId) {
      $location.url('/sops/edit/'+sopId  );
    };

  });
