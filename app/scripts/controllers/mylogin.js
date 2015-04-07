'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:MyloginCtrl
 * @description
 * # MyloginCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('MyloginCtrl', function ($scope, $http,$localStorage, $route) {

    $scope.login = function (username,password) {
      //console.log('username: '+username+' password: '+password);
      //console.log('validate token');

      var req = {
        method : 'POST',
        url : 'http://localhost:8000/api-token-auth/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {'username':username,'password':password}
      };

    $http(req)
      .success( function (data) {
        $localStorage.token = data.token;

        $('#loginLink').hide();
        $('#loggedIn').show();
        $('#headerSop').show();
        $('#headerTemplate').show();
      })
      .error( function () {

      })
      .then(function(){
      // console.log(response.data.token)
        $route.reload();
    });




    };
  });
