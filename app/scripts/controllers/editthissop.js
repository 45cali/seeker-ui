'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:EditThisSopCtrl
 * @description
 * # EditThisSopCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('EditThisSopCtrl', function ($scope,
                                           alerts,
                                           groupNames,
                                           sop,
                                           products,
                                           checkJwt,
                                           checkPerm,
                                           $routeParams,
                                           $location,
                                           template,
                                           jsonData,
                                           $localStorage) {

    // verify valid token
    checkJwt.validate();

    var thisId = $routeParams.sopId;
    var previousAlertSet = [];
    sop.get(thisId)
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
        previousAlertSet = data.alert_set;
        // backup list
        $scope.sopId = thisId;
        $scope.sopUrl = data.url;


      })
      .then( function () {

        alerts.get()
          .then(function (data) {

            //console.log(data.data);
            $scope.masterList = alerts.listify(data.data);
           // console.log($scope.masterList);

          });
        // load list of products
        products.list()
          .then( function (data) {

            $scope.productList = data.data;
          });
        // load list of templates
        template.list()
          .then( function (data) {
            //console.log(data.data);
            $scope.templateList = data.data;
          });
      });



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

    $scope.removeFromAlertList = function (key,item) {
      //console.log($scope.sopAlertSet[key]);

      $scope.sopAlertSet.splice($scope.sopAlertSet.indexOf(item), 1);

      //console.log($scope.sopAlertSet);
    };

    $scope.goBack = function () {

      $location.url('/sops/'+thisId);

    };

    // update value of product
    $scope.updateSopProduct = function(product) {
      $scope.sopProduct = product;
    };
    // update value of group
    $scope.updateSopGroup = function(group) {
      $scope.sopGroup = group;
    };

    // load alerts from selected template
    $scope.selectTemplate = function (thisTemplate){
      $scope.sopTemplate = thisTemplate.name;

      // load alerts
      //console.log(thisTemplate.alert_set);

      // make a backup
      previousAlertSet = $scope.sopAlertSet;
      $scope.sopAlertSet = thisTemplate.alert_set;



    };

    // go back to previous alert list
    $scope.previousAlertList = function () {

      $scope.sopAlertSet = previousAlertSet;


    };

    $scope.deleteSop = function() {

      sop.delete($scope.sopUrl, $localStorage.token)
        .success( function () {
          $location.url('/sops/');
        })
        .error( function () {
          //console.error(data)
        })
        .then();
    };

    $scope.updateSop = function () {

      var sopUrl = $scope.sopUrl;

      var currentUserToken = $localStorage.token;
      var sopPattern = $scope.sopPattern;
      var sopProduct = $scope.sopProduct;
      var sopGroup = $scope.sopGroup;
      var sopAlertSet = $scope.sopAlertSet;
      var sopInfo = $scope.sopEscalationInfo;
      var sopOncall = $scope.sopOncall;
      var sopEmail = $scope.sopEmail;

      sop.put(sopUrl,  currentUserToken, sopPattern, sopProduct, sopGroup, sopAlertSet, sopInfo, sopOncall, sopEmail)
        .success( function () {

          //console.log('success: '+data);
        })


        .error( function () {

          //console.error('error: '+data)
        })
        .then( function () {

        });
    };



    // load information data
    $scope.loadHelpInfo = function () {

      jsonData.get('editsopinfo.json').then(function (data) {
         $scope.sopEditHelpInfo = data.data;
      });

    };







  });
