'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:MyloginCtrl
 * @description
 * # MyloginCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('MyloginCtrl', function ($scope, $http,$localStorage, $route, backendHost) {

    $scope.login = function (username,password) {
      console.log('username: '+username+' password: '+password);
      //
      var path = backendHost.backendPath();

      console.log(path);
      var urlPath = path.baseUrl+'/api-token-auth/';
      var req = {
        method : 'POST',
        url : urlPath,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {"username":username,"password":password}
      };

    $http(req)
      .success( function (data) {
        $localStorage.token = data.token;
        console.log('token: '+data.token);

        $('#loginLink').hide();
        $('#loggedIn').show();
        $('#headerSop').show();
        $('#headerTemplate').show();
        $route.reload();
      })
      .error( function () {

      })
      .then(function(){
      // console.log(response.data.token)

    });




    }
  });
