'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:MyloginCtrl
 * @description
 * # MyloginCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('MyloginCtrl', function ($scope, $http) {

    $scope.login = function (username,password) {
      console.log('username: '+username+' password: '+password);

      var req = {
        method : 'POST',
        url : 'http://localhost:8000/api-token-auth/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {"username":username,"password":password}
      };

    $http(req).then(function(response){console.log(response.data.token)});




    }
  });
