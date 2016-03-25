'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:ActorCtrl
 * @description
 * # ActorCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('ActorCtrl', ['$scope','getActor', '$routeParams', function ($scope, getActor, $routeParams) {
    var actorId = $routeParams.actorId;
    $scope.actor = {};

    getActor.getActorById(actorId).then(function(data){
      $scope.actor = data;
    });

  }]);
