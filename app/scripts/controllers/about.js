'use strict';

/**
 * @ngdoc function
 * @name noBackendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the noBackendApp
 */
angular.module('noBackendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
