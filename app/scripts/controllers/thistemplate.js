'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:ThisTemplateCtrl
 * @description
 * # ThisTemplateCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('ThisTemplateCtrl', function ($scope,$routeParams,template,checkJwt,checkPerm,$location) {
    checkJwt.validate();





    var thisId = $routeParams.templateId;

    template.get(thisId)
      .success(function(response){

      })
      .error(function(response){

      })
      .then(function(response){

        console.log(response.data.owner);

        $scope.thisTemplate = response.data;

        console.log('isOwner: '+checkPerm.isOwner(response.data.owner));

        $scope.isOwner = checkPerm.isOwner(response.data.owner);

        });

    $scope.editTemplate = function (templateId) {

      $location.url('/templates/edit/'+templateId  );
    };

    $scope.goBack = function () {

      $location.url('/templates/' );
    };



  });
