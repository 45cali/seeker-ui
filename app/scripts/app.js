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
    'angular-jwt',
    'ngStorage',
    'smart-table',
    'ui.sortable'


  ])
  .config(function ($routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
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
      .when('/sops/:sopId', {
        templateUrl: 'views/thissop.html',
        controller: 'ThisSopCtrl'
      })
      .when('/sops/edit/:sopId', {
        templateUrl: 'views/editthissop.html',
        controller: 'EditThisSopCtrl'
      })
      .when('/create/sops', {
        templateUrl: 'views/createsop.html',
        controller: 'CreateSopCtrl'
      })
      .when('/templates', {
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl'

      })
      .when('/templates/:templateId', {
        templateUrl: 'views/thistemplate.html',
        controller: 'ThisTemplateCtrl'
      })
      .when('/templates/edit/:templateId', {
        templateUrl: 'views/editthistemplate.html',
        controller: 'EditThisTemplateCtrl'
      })
      .when('/create/templates', {
        templateUrl: 'views/createtemplate.html',
        controller: 'CreateTemplateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



