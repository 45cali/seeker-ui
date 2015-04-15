'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:ApiCtrl
 * @description
 * # ApiCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('ApiCtrl', function ($scope, $http, jsonData, backendHost ) {
    $scope.endpointInfo = false;

    $scope.thisHost = backendHost.backendPath();

    console.log($scope.thisHost.baseUrl);

    jsonData.get('apiinfo.json')
      .success(function (data) {

          //console.log(data[0].endpoints);
          //console.log(data[2]);
      })
      .error( function (data) {
        console.error(data);
      })
      .then( function (data) {
        $scope.apiInfoEndpoints = data.data[0].endpoints;
        $scope.apiInfoExamples = data.data[1].examples;
        $scope.apiInfoJwt = data.data[2].jwt;
      });





  });
