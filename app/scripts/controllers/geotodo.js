'use strict';

/**
 * @ngdoc function
 * @name noBackendApp.controller:GeotodoCtrl
 * @description
 * # GeotodoCtrl
 * Controller of the noBackendApp
 */
angular.module('noBackendApp')
  .controller('GeotodoCtrl', function ($scope, $firebase,geoloc) {
    var todoRef = new Firebase('https://amber-fire-9628.firebaseio.com/geoTodo'),
      geoPos = {};


    geoloc.getUserPosition().then(function(pos){
      geoPos = pos;
    });

    // Automatically syncs everywhere in realtime
    $scope.todos = $firebase(todoRef);

    $scope.agregarTodo = function(){
      var timeStamp = new Date().valueOf(),
          itemRef = new  Firebase('https://amber-fire-9628.firebaseio.com/geoTodo/' + timeStamp );

      // AngularFire $add method
      $firebase(itemRef).$set({
        id: timeStamp,
        description:$scope.todoDescription,
        geoPos:geoPos,
        status:false
      });
      $scope.todoDescription = "";
    };
  });
