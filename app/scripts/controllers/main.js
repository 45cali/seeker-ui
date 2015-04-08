'use strict';

/**
 * @ngdoc function
 * @name seekerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seekerUiApp
 */
angular.module('seekerUiApp')
  .controller('MainCtrl',function ($scope,seeker, backendHost) {

    console.log(backendHost.backendPath());

    $scope.getRequestSeeker = function (hostnameId,alertId) {
        //console.log(hostnameId,alertId);
         var result = seeker.lookup(hostnameId,alertId);
         result.then(function(response) {

             //console.log(response);
             var searchResult = response.data.data_passed.results;
            // console.log(searchResult);

             if (typeof searchResult === 'string'){

               //console.log('searchResult is a sting obj, this means no result found');
               $scope.noMatch = true;
               $scope.matchFound = false;
             }

             else if (searchResult instanceof Array){

               //console.log(searchResult.length);
               //console.log('searchResult is an array obj, this means one result found');

               $scope.noMatch = false;
               $scope.matchFound = true;
               $scope.searchResult = searchResult;




             }


             else {
              // console.log('typeof searchResult:'+typeof searchResult);
             }

         });


    };

  });
