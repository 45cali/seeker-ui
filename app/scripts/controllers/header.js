'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('HeaderCtrl', function ($scope,$localStorage,jwtHelper,checkJwt) {
    $('#loginLink').show();
    $('#loggedIn').hide();
    $('#headerSop').hide();
    $('#headerTemplate').hide();

    if (typeof $localStorage.token === 'undefined') {


      //console.log('no token present');

    }
    else {

      $scope.$storage = $localStorage;
      var thisToken = $scope.$storage.token;
      //console.log(thisToken);

      var bool = jwtHelper.isTokenExpired(thisToken);
      //console.log(bool);

      if (bool === false) {
        var tokenInfo = jwtHelper.decodeToken(thisToken);
        //console.log(tokenInfo);

        $scope.currentUser = tokenInfo.username;


        $('#loginLink').hide();
        $('#loggedIn').show();
        $('#headerSop').show();
        $('#headerTemplate').show();
      }
      else {
        delete $scope.$storage.token;
      }



    }

    $scope.logout = function () {
      delete $scope.$storage.token;
      checkJwt.validate();

    };



  });
