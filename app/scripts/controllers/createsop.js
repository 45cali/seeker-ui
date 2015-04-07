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
                                         $location,
                                         $localStorage,
                                         sop,
                                         jsonData) {

    // verify valid token
    checkJwt.validate();

    $scope.sopAlertSet = [];

    var previousAlertSet = [];

    $scope.showCreateResponse = false;
    $scope.showDetail = false;

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
        if (typeof a !== 'undefined' ) {

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

      var currentUserToken = $localStorage.token;
      var sopPattern = $scope.sopPattern;
      var sopProduct = $scope.sopProduct;
      var sopGroup = $scope.sopGroup;
      var sopAlertSet = $scope.sopAlertSet;
      var sopInfo = $scope.sopEscalationInfo;
      var sopOncall = $scope.sopOncall;
      var sopEmail = $scope.sopEmail;

      sop.post(currentUserToken, sopPattern, sopProduct, sopGroup, sopAlertSet, sopInfo, sopOncall, sopEmail)
        .success( function (data) {
         // console.log(data);

          $scope.createStatus = {'message' : 'Sop created successfully',
                                 'detail' : data,
                                 'class' : 'alert-success'};
          $scope.showCreateResponse = true;

        } )
        .error( function (data) {
         // console.error(data);

          $scope.createStatus = {'message' : 'There was an error in creating sop',
                                 'detail' : data,
                                 'class' : 'alert-danger'};
          $scope.showCreateResponse = true;


        } );

    };

    $scope.removeFromAlertList = function (key,item) {
      //console.log($scope.sopAlertSet[key]);

      $scope.sopAlertSet.splice($scope.sopAlertSet.indexOf(item), 1);

      //console.log($scope.sopAlertSet);
    };

    $scope.updateSopProduct = function(product) {
      $scope.sopProduct = product;
    };

    $scope.updateSopGroup = function(group) {
      $scope.sopGroup = group;
    };

    $scope.showResponseDetail = function () {

      $scope.showDetail = !$scope.showDetail;
    };

    $scope.loadHelpInfo = function () {

      jsonData.get('editsopinfo.json').then(function (data) {
        $scope.sopEditHelpInfo = data.data;
      });

    };

  });
