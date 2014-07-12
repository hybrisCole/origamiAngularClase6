'use strict';

/**
 * @ngdoc function
 * @name noBackendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noBackendApp
 */
angular.module('noBackendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
