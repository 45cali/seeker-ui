'use strict';

/**
 * @ngdoc service
 * @name seekerUiApp.backendHost
 * @description
 * # backendHost
 * Service in the seekerUiApp.
 */
angular.module('seekerUiApp')
  .service('backendHost', function ($location) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var dev = {'hostname' : 'localhost',
               'port': '8000',
               'baseUrl' : 'http://localhost:8000'};

    var prod = {'hostname' : $location.host(),
                'port' : $location.port(),
                'baseUrl' : 'http://'+$location.host()+':'+$location.port()};

    this.backendPath = function () {
       console.log('localHost: '+$location.host());
       if ($location.host() === 'localhost'){
         console.log('return dev');
         return dev;
       }
       else {
         console.log('return prod');
         return prod;
       }

    };


  });
