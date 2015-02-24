'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('HeaderCtrl', function ($scope,$localStorage,jwtHelper) {
    $('#loginLink').show();
    $('#loggedIn').hide();

    if (typeof $localStorage.token === 'undefined') {


      console.log('no token present');

    }
    else {
      $scope.$storage = $localStorage;
      var thisToken = $scope.$storage.token;
      console.log(thisToken);
      var tokenInfo = jwtHelper.decodeToken(thisToken);
      console.log(tokenInfo);
      $scope.$storage.username = tokenInfo.username;
      $('#loginLink').hide();
      $('#loggedIn').show();
    }

    $scope.logout = function () {
      delete $scope.$storage.token;
      delete $scope.$storage.token;

      console.log('token deleted :(');
      $('#loginLink').show();
      $('#loggedIn').hide();
    }



  });
