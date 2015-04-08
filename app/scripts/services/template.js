'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.template
 * @description
 * # template
 * Factory in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .factory('template', function ($http, backendHost) {

    var path = backendHost.backendPath();

    var baseUrl = path.baseUrl+'/api/templates/';

    return {
      list: function() {
           return $http.get(baseUrl);
      },
      get: function (templateId) {
           return $http.get(baseUrl+templateId);
      },
      put: function (templateUrl, templateName, templateDescription, templateAlertSet, currentUserToken) {
           return $http({

               method: 'PUT',
               url: templateUrl,
               headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'JWT '+currentUserToken
               },
               data: {
                  name: templateName,
                  description: templateDescription,
                  alert_set: templateAlertSet,
                  owner: 'me'
               }

           });
      },
      post: function (templateName, templateDescription, templateAlertSet, currentUserToken) {
            return $http({

              method: 'POST',
              url: baseUrl,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT '+currentUserToken
              },
              data: {
                name: templateName,
                description: templateDescription,
                alert_set: templateAlertSet,
                owner: 'me'
              }

            });
      },
      delete: function (templateUrl, currentUserToken) {
            return $http({

              method: 'DELETE',
              url: templateUrl,
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT '+currentUserToken
              }
            });
      }




    };




  });
