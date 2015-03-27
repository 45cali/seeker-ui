'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.checkPerm
 * @description
 * # checkPerm
 * Service in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .service('checkPerm', function ($localStorage, jwtHelper, $location, groupNames, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var thisToken = $localStorage.token;
    var tokenInfo = jwtHelper.decodeToken(thisToken);



    this.isOwner = function (owner) {

      if (typeof thisToken != 'undefined') {

        if (owner === tokenInfo.username) {
          return true;
        }

        return false;
      }


    };

    this.isGroup = function (group) {

      if (typeof thisToken != 'undefined') {

        var deferred = $q.defer();


        groupNames.get()
          .then( function (list) {
           //console.log(list);
          // check for match
          var boolValue = false;
          if (list.indexOf(group) >= 0) {
              boolValue = true;
          }

          deferred.resolve(boolValue);

        });

      return deferred.promise;
      }
      else {
        return false;
      }


    };



    this.isOwnerOrRedirect = function (owner) {
      if (typeof thisToken != 'undefined') {

        if (owner === tokenInfo.username) {
        }

        else {
          $location.path('/templates');
        }
      }



    };


    this.isGroupOrRedirect = function (group) {

    }










  });
