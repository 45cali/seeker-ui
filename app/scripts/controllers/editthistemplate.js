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

    // validate user
    checkJwt.validate();

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

               // use 'listify method from the alerts service to bulid a list'
               $scope.masterList = alerts.listify(response.data);

            })
      });

    // config for the ui-sortable directive
    $scope.sortableOptions = {

      update: function(e, ui) {
      },
      receive: function(e, ui) {

      },

      // connect masterList and templateList
      connectWith: ".alert-container"
    };

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
      var url = $scope.editThisTemplate.url;
      console.log('url: '+url);

      var name = $scope.templateName;

      // check if name is undefined
      if (typeof name === 'undefined') {
          // set name to original name
          name = $scope.editThisTemplate.name;
      }
      // check lenth of name > 0
      else if (name.length < 1) {
          // set name to original name
          name = $scope.editThisTemplate.name
      }
      else {
          // use the new name
          name = name;
      }
      console.log('name: '+name);

      var description = $scope.thisTextArea;
      console.log('descriptiopn: '+description);

      var alert_set = $scope.templateList;
      console.log('alert_set: '+typeof alert_set);
    }



  });
