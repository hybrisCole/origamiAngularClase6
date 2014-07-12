'use strict';

/**
 * @ngdoc overview
 * @name noBackendApp
 * @description
 * # noBackendApp
 *
 * Main module of the application.
 */
angular
  .module('noBackendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
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
      .when('/geoTodo', {
        templateUrl: 'views/geotodo.html',
        controller: 'GeotodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
