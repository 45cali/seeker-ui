'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('MainCtrl',function ($scope,seeker,$http) {



    $scope.getRequestSeeker = function (hostnameId,alertId) {
        console.log(hostnameId,alertId);
        var gist = seeker.lookup(hostnameId,alertId);
        alert(gist);
        console.log(gist);


    };


  });
