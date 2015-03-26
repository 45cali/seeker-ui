'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:EditThisTemplateCtrl
 * @description
 * # EditthistemplateCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('EditThisTemplateCtrl', function ($scope,checkJwt,checkPerm,template,
                                                $routeParams,alerts,$localStorage,$location) {

    // validate user
    checkJwt.validate();

    $scope.showUpdate = false;
    // get id passed in the url
    var thisId = $routeParams.templateId;

    // call get method from template service
    template.get(thisId)
      .success(function(response){

      })
      .error(function(response){

      })
      .then(function(response){

        // check permissions of user
        checkPerm.isOwnerOrRedirect(response.data.owner);

        // load template data
        $scope.editThisTemplate = response.data;

        // assign list to $scope.templateList
        $scope.templateList = $scope.editThisTemplate['alert_set'];

        // assign description to $scope.thisTextArea
        $scope.thisTextArea = $scope.editThisTemplate.description;


      })
      .then(function () {

          // load master list of alerts
          alerts.get()
            .success(function () {

            })
            .error(function () {

            })
            .then(function (response) {

               // use 'listify method from the alerts service to build a list'
              $scope.masterList = alerts.listify(response.data);
            //  $scope.filterMasterList = $scope.masterList;

            })
      });

    /*
    // config for the ui-sortable directive
    $scope.sortableOptions = {

      update: function(e, ui) {
      },
      receive: function(e, ui) {

      },

      // connect masterList and templateList
      connectWith: ".alert-container"
    };
    */
    // function to append additional values to templateList
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

    // update template
    $scope.updateTemplate = function (textAreaData) {

      /*
      * need following params
      * url
      * name
      * description
      * alert_set
      */

      // POST using template.post
      var templateUrl = $scope.editThisTemplate.url;
      console.log('url: '+templateUrl);

      var templateName = $scope.templateName;

      // check if name is undefined
      if (typeof templateName === 'undefined') {
          // set name to original name
          templateName = $scope.editThisTemplate.name;
      }
      // check length of name > 0
      else if (templateName.length < 1) {
          // set name to original name
          templateName = $scope.editThisTemplate.name
      }
      else {
          // use the new name
          templateName = templateName;
      }
      console.log('name: '+name);

      var templateDescription = $scope.thisTextArea;
      console.log('descriptiopn: '+templateDescription);

      var templateAlertSet = $scope.templateList;
      console.log('alert_set: '+ typeof templateAlertSet+' val:'+templateAlertSet);

      console.log('token :'+$localStorage.token);

      var tryUpdate = template.put(templateUrl, templateName, templateDescription, templateAlertSet, $localStorage.token)
        .success(function () {
          $scope.updateInfo = "The update was a success";
          $scope.updateClass = 'alert alert-success';
        })
        .error(function () {
          $scope.updateInfo = "There was an error and this information was not updated. If this issue continues, please contact the admin for this tool.";
          $scope.updateClass = 'alert alert-success';
        })
        .then(function () {
          $scope.showUpdate = true;
        });



    };

    // Delete this template
    $scope.deleteTemplate = function () {
      var templateUrl = $scope.editThisTemplate.url;

      var deleteTemplate = template.delete(templateUrl, $localStorage.token)
        .success( function (data, status) {
          console.log(data, status);
          console.log('success, redirect to /templates');
          $location.url('/templates');
        })
        .error( function (data, status) {
          console.error(data, status);
        })
        .then( function (data, status) {

        })
    };


    $scope.goBack = function () {

      $location.url('/templates/'+thisId);

    };

    $scope.toggleList = function (key,list) {

      if (list === 'template') {
        console.log('add to masterList');
        console.log()
      }


    };

  });
