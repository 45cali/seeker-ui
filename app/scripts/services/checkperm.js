'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.checkPerm
 * @description
 * # checkPerm
 * Service in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .service('checkPerm', function ($localStorage,jwtHelper) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var thisToken = $localStorage.token;
    var tokenInfo = jwtHelper.decodeToken(thisToken);



    this.isOwner = function(owner){

      if (typeof thisToken != 'undefined') {

        if (owner === tokenInfo.username) {
          return true;
        }

        return false;
      }





    }

    this.isGroup = function(group){

      if (typeof thisToken != 'undefined') {

      }



    }
  });
