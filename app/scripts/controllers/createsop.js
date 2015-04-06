'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:CreateSopCtrl
 * @description
 * # CreateSopCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('CreateSopCtrl', function ($scope,
                                         checkJwt,
                                         groupNames,
                                         template,
                                         products,
                                         alerts,
                                         $location) {

    // verify valid token
    checkJwt.validate();
    $scope.sopAlertSet = [];
    var previousAlertSet = [];

    // Load groupList
    groupNames.get()
      .then( function (groupList) {

        $scope.groupList = groupList;
      });

    // Load productList
    products.list()
      .then( function (data) {

        $scope.productList = data.data;
      });
    // Load Templates
    template.list()
      .then( function (data) {
        //console.log(data.data);
        $scope.templateList = data.data;
      });

    $scope.selectTemplate = function (thisTemplate){
      $scope.sopTemplate = thisTemplate.name;

      // load alerts
      //console.log(thisTemplate.alert_set);

      // make a backup
      previousAlertSet = $scope.sopAlertSet;
      $scope.sopAlertSet = thisTemplate.alert_set;


    };

    // load masterList
    alerts.get()
      .then(function (data) {

        //console.log(data.data);
        $scope.masterList = alerts.listify(data.data);
        // console.log($scope.masterList);

      });

     $scope.goBack = function () {
       $location.url('/sops');
     };


    // go back to previous alert list
    $scope.previousAlertList = function () {

      $scope.sopAlertSet = previousAlertSet;


    };
    // add item to alert list
    $scope.addToAlertList = function (a) {


      // validate entry must not already be in the list and value cannot be undefined
      if ($scope.sopAlertSet.indexOf(a) > -1 || typeof a === 'undefined' ){

        // reset input box
        $scope.thisAlert = '';

      }
      else {
        // validate unique entry
        if (typeof a != 'undefined' ) {

          if (a.length > 0) {

            // add to templateList list



            $scope.sopAlertSet.push(a);
            // reset input box
            $scope.thisAlert = '';

          }
        }
      }
    };

    $scope.createSop = function () {



    };

    $scope.removeFromAlertList = function (key,item) {
      //console.log($scope.sopAlertSet[key]);

      $scope.sopAlertSet.splice($scope.sopAlertSet.indexOf(item), 1);

      //console.log($scope.sopAlertSet);
    };


  });
