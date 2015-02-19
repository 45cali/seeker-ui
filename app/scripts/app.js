'use strict';

/**
 * @ngdoc overview
 * @name seekerUiApp
 * @description
 * # seekerUiApp
 *
 * Main module of the application.
 */
var app = angular
  .module('seekerUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-jwt'

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
      .otherwise({
        redirectTo: '/'
      });
  });



