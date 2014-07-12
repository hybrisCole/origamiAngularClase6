'use strict';

/**
 * @ngdoc function
 * @name noBackendApp.controller:TodolistaCtrl
 * @description
 * # TodolistaCtrl
 * Controller of the noBackendApp
 */
angular.module('noBackendApp')
  .controller('TodolistaCtrl', function ($scope, $firebase) {
    var todoRef = new Firebase('https://amber-fire-9628.firebaseio.com/people');

    // Automatically syncs everywhere in realtime
    $scope.todos = $firebase(todoRef);
  });
