'use strict';

/**
 * @ngdoc function
 * @name noBackendApp.controller:GeotodoCtrl
 * @description
 * # GeotodoCtrl
 * Controller of the noBackendApp
 */
angular.module('noBackendApp')
  .controller('GeotodoCtrl', function ($scope, $firebase) {
    var todoRef = new Firebase('https://amber-fire-9628.firebaseio.com/people');

    // Automatically syncs everywhere in realtime
    $scope.todos = $firebase(todoRef);

    $scope.agregarTodo = function(){
      // AngularFire $add method
      $scope.todos.$add($scope.todoDescription);
      $scope.todoDescription = "";
    };
  });
