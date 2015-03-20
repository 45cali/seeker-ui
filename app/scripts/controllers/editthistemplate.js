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
        //console.log('editTemplate  owner:  '+response.data.owner);
        // check permissions
        checkPerm.isOwnerOrRedirect(response.data.owner);

        // load template data
        $scope.editThisTemplate = response.data;

        // assign list to $scope.templateList
        //console.log('editThisTemplate:  ' +$scope.editThisTemplate['alert_set']);
        $scope.templateList = $scope.editThisTemplate['alert_set'];
       // console.log('this should be a list: '+$scope.templateList);

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
               // make data into a list
               $scope.masterList = alerts.listify(response.data);

            })
      });


    // load templateList




    $scope.templateList = ["1","2"];



    $scope.sortableOptions = {
      update: function(e, ui) {
      },
      receive: function(e, ui) {

      },

      connectWith: ".alert-container"

    };

    $scope.addAlertToTemplateList = function (a) {
         if ($scope.templateList.indexOf(a) > -1) {
           console.log('already in templateList');
           $scope.thisAlert = '';


         }
         else {

           $scope.templateList.push(a);
           $scope.thisAlert = '';


         }

    }





  });
