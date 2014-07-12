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

    $scope.todosPorHacer = [];
    $scope.todosListos = [];

    var todoRef = new Firebase('https://amber-fire-9628.firebaseio.com/geoTodo');
    // Automatically syncs everywhere in realtime
    $scope.todos = $firebase(todoRef);

    todoRef.on('value', function(snapshot) {
      $scope.todosPorHacer = _.where($scope.todos, { 'status': false });
      $scope.todosListos = _.where($scope.todos, { 'status': true });
    });

    $scope.cambiarStatus = function(todo){
      var itemRef = new  Firebase('https://amber-fire-9628.firebaseio.com/geoTodo/' + todo.id);

      // Firebase : Update the item
      todo.status = !todo.status;
      $firebase(itemRef).$set(todo);
    };

    todoRef.on('child_changed', function(snapshot) {
      $scope.todosPorHacer = _.where($scope.todos, { 'status': false });
      $scope.todosListos = _.where($scope.todos, { 'status': true });
    });

  });
