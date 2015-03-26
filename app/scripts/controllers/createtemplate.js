'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:CreateTemplateCtrl
 * @description
 * # CreateTemplateCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('CreateTemplateCtrl', function ($scope,checkJwt,alerts,$location,$localStorage,template) {
    checkJwt.validate();

    $scope.templateList = [];
    $scope.showCreate = false;
    $scope.moreResponseDetail = false;
    $scope.toggleShow = function () {
      $scope.moreResponseDetail = !$scope.moreResponseDetail;
      console.log('mrd: '+$scope.moreResponseDetail);
    };

    alerts.get()
      .success(function () {

      })
      .error(function () {

      })
      .then(function (response) {

        // use 'listify method from the alerts service to build a list'
        $scope.masterList = alerts.listify(response.data);


      });

    $scope.addAlertToTemplateList = function (a) {

      // validate entry must not already be in the list and value cannot be undefined
      if ($scope.templateList.indexOf(a) > -1 || typeof a === 'undefined' ){

        // reset input box
        $scope.thisAlert = '';


      }
      else {
        // validate unique entry
        if (typeof a != 'undefined' ) {

          if (a.length > 0) {

            // add to templateList list
            $scope.templateList.push(a);

            // reset input box
            $scope.thisAlert = '';


          }
        }



      }

    };

    $scope.removeFromTemplateList = function (key,item) {
      console.log($scope.templateList[key]);

      $scope.templateList.splice($scope.templateList.indexOf(item), 1);

      console.log($scope.templateList);
    };

    $scope.goBack = function () {

      $location.url('/templates/');

    };



    $scope.createTemplate = function () {

      var templateName = $scope.templateName;
      console.log('description: '+templateName);

      var templateDescription = $scope.thisTextArea;
      console.log('description: '+templateDescription);

      var templateAlertSet = $scope.templateList;
      console.log('alert_set: '+ typeof templateAlertSet+' val:'+templateAlertSet);

      console.log('token :'+$localStorage.token);


      var createTemplate = template.post(templateName, templateDescription, templateAlertSet, $localStorage.token)
        .success( function (data, status) {
/*             console.log('createTemplate call:  success');
             console.log('success response:', status,data);
             $scope.createInfo = "Template created successfully";
             $scope.updateClass = 'alert alert-success';
*/
             $scope.createResponse = {

                    'message': 'Template "'+templateName+'" created',
                    'class'  : 'alert-success',
                    'status'  : status,
                    'data'   : data
             }


        })
        .error(function(data, status) {
/*            $scope.createInfo = "There was an error creating template";
            $scope.updateClass = 'alert alert-success';

          console.error('Repos error', status, data);
*/
          $scope.createResponse = {

            'message': 'There was an error creating this template',
            'class'  : 'alert-danger',
            'status'  : status,
            'data'   : data
          };

          $scope.showCreate = true;


        })
        .then( function () {



          $scope.showCreate = true;

        });





    };







  });
