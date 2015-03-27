'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.groupNames
 * @description
 * # groupNames
 * Service in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .service('groupNames', function (groups, users, $localStorage,jwtHelper,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var thisToken = $localStorage.token;
    var tokenInfo = jwtHelper.decodeToken(thisToken);

    this.get = function () {
         var deferred = $q.defer();
         users.list()
           .then(function (userList) {
                groups.list()
                  .then(function (groupList) {
                       //console.log(userList.data);
                       //console.log(groupList.data);

                       // list of users
                       var ul = userList.data;
                       // list of groups
                       var gl = groupList.data;
                       // instantiate empty group id list
                       var gidList = [];
                       // instantiate empty group names list
                       var groupNames = [];

                       // loop over list of users to find current user info
                       for (var u in ul) {
                         //console.log(ul[u]);
                         // match user list to current user
                         if (ul[u].username === tokenInfo.username) {
                           //console.log(ul[u].username);

                           // assign current user group id(s) to gidList and break out of loop
                           gidList = ul[u].groups;
                           break;
                         }

                       }
                       //console.log(gidList);
                       // loop over gidList
                       for (var gid in gidList) {
                         //console.log(gidList[gid]);

                         var id = gidList[gid];

                         // loop over list of groups
                         for (var group in gl) {

                           //console.log(gl[group]);

                           // match id of gl object with id in gidList
                           if (gl[group].id === id) {
                             //console.log('found: '+ gl[group].name );
                             // push name in group object to groupNames list
                             groupNames.push(gl[group].name);
                           }
                         }

                       }

                       //console.log(groupNames);

                       // return groups current user is apart of
                       //return groupNames;
                       deferred.resolve(groupNames);

                  });
           });
    return deferred.promise;
    };


  });
