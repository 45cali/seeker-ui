'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:EditThisSopCtrl
 * @description
 * # EditThisSopCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('EditThisSopCtrl', function ($scope, alerts, groupNames, sop, products, checkJwt, checkPerm, $routeParams) {

    // verify valid token
    checkJwt.validate();

    var thisId = $routeParams.sopId;

    var getInstance = sop.get(thisId)
      .success( function (data) {
        //console.log(data);

                    // load list of users groups
                    groupNames.get()
                      .then( function (groupList) {
                        // verify user is apart of group or redirect
                        checkPerm.isGroupOrRedirect(data.owner, groupList);

                        // load groups in groupList
                        $scope.groupList = groupList;


                      });

        // bind values of data to their respective $scope
        $scope.sopGroup = data.owner;
        $scope.sopPattern = data.pattern;
        $scope.sopProduct = data.product;
        $scope.sopOncall = data.oncall;
        $scope.sopEmail = data.email;
        $scope.sopEscalationInfo = data.info;
        $scope.sopAlertSet = data.alert_set;
        $scope.sopId = thisId;


      })
      .then( function () {

        alerts.get()
          .then(function (data) {

            //console.log(data.data);
            $scope.masterList = alerts.listify(data.data);
           // console.log($scope.masterList);

          });

        products.list()
          .then( function (data) {

            $scope.productList = data.data;
          });


      });












    // remove item from alert List
    $scope.removeFromAlertList = function (key,item) {


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
    // update value of product
    $scope.updateSopProduct = function(product) {
      $scope.sopProduct = product;
    };
    // update value of group
    $scope.updateSopGroup = function(group) {
      $scope.sopGroup = group;
    };


  });