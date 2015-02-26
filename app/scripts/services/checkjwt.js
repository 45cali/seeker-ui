'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.checkJwt
 * @description
 * # checkJwt
 * Service in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .service('checkJwt', function ($localStorage,$location,jwtHelper) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.validate = function () {
      if (typeof $localStorage.token != 'undefined') {
        if (jwtHelper.isTokenExpired($localStorage.token) === true){
          console.log('jwt expired so deleting it');
          delete $localStorage.token;
          console.log('redirecting to home page');
          $('#loginLink').show();
          $('#loggedIn').hide();
          $('#headerSop').hide();
          $('#headerTemplate').hide();
          $location.path('/');
        }
      }
      else {
        console.log('jwt not in local storage, redirecting to home page');
        $('#loginLink').show();
        $('#loggedIn').hide();
        $('#headerSop').hide();
        $('#headerTemplate').hide();
        $location.path('/');

      }
    }
  });
