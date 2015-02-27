'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:ThisTemplateCtrl
 * @description
 * # ThisTemplateCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('ThisTemplateCtrl', function ($scope,$routeParams,template,checkJwt) {
    checkJwt.validate();

    var thisId = $routeParams.templateId;
    template.get(thisId)
      .success(function(response){

      })
      .error(function(response){

      })
      .then(function(response){
          console.log(response);
          $scope.thisTemplate = response.data;
      })



  });
