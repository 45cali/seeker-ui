'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.sop
 * @description
 * # sop
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('sop', function ($http, backendHost) {
    // Service logic
    // ...
    var path = backendHost.backendPath();

    var baseUrl = path.baseUrl+'/api/lookup/';

    return {

      list: function () {
        return $http.get(baseUrl);
      },

      get: function (sopId) {
        return $http.get(baseUrl+sopId);
      },

      put: function (sopUrl, currentUserToken, sopPattern, sopProduct, sopGroup, sopAlertSet, sopInfo, sopOncall, sopEmail) {
        return $http({
          method: 'PUT',
          url: sopUrl,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT '+currentUserToken
          },
          data: {
            pattern: sopPattern,
            product: sopProduct,
            created_by: 'me',
            owner: sopGroup,
            alert_set: sopAlertSet,
            info: sopInfo,
            oncall: sopOncall,
            email: sopEmail
          }
        });

      },

      post: function (currentUserToken, sopPattern, sopProduct, sopGroup, sopAlertSet, sopInfo, sopOncall, sopEmail) {
        return $http({
          method: 'POST',
          url: baseUrl,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT '+currentUserToken
          },
          data: {
            pattern: sopPattern,
            product: sopProduct,
            created_by: 'me',
            owner: sopGroup,
            alert_set: sopAlertSet,
            info: sopInfo,
            oncall: sopOncall,
            email: sopEmail
          }
        });

      },

      delete: function (sopUrl, currentUserToken) {
        return $http({

          method: 'DELETE',
          url: sopUrl,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT '+currentUserToken
          }
        });
      }


    };


  });
