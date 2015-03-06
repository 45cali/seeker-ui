'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:EditThisTemplateCtrl
 * @description
 * # EditthistemplateCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('EditThisTemplateCtrl', function ($scope,checkJwt,checkPerm,template,$routeParams,alerts) {
    checkJwt.validate();

    var thisId = $routeParams.templateId;
    template.get(thisId)
      .success(function(response){

      })
      .error(function(response){

      })
      .then(function(response){
        console.log('editTemplate   '+response.data.owner);
        checkPerm.isOwnerOrRedirect(response.data.owner);
        $scope.editThisTemplate = response.data;
      })
      .then(function () {
          alerts.get()
            .success(function () {

            })
            .error(function () {

            })
            .then(function (response) {
            //    console.log('alert obj list:' + response.data)
            //    console.log('run listify');
            //    console.log('alertList: ' + alerts.listify(response.data));

               $scope.masterList = alerts.listify(response.data);

            })
      });

    $scope.templateList = [];

    $scope.moveToTemplateList = function (thisAlert) {
       console.log('moveToTemplateList(): ' + thisAlert);

       $scope.templateList.push(thisAlert);
    };

    $scope.moveToMasterList = function (thisAlert) {
      console.log('moveToMasterList(): ' + thisAlert);
       $scope.masterList.push(thisAlert);

    };









  });
