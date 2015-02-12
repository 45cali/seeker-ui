'use strict';

/**
 * @ngdoc overview
 * @name seekerUiApp
 * @description
 * # seekerUiApp
 *
 * Main module of the application.
 */
angular
  .module('seekerUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/api', {
        templateUrl: 'views/api.html',
        controller: 'ApiCtrl'
      })
      .when('/sops', {
        templateUrl: 'views/sops.html',
        controller: 'SopsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
