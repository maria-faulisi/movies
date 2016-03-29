'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:ActorCtrl
 * @description
 * # ActorCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('ActorCtrl', ['$scope','getActor', '$routeParams', 'getActorsMovies', function ($scope, getActor, $routeParams, getActorsMovies) {
    var actorId = $routeParams.actorId;

    getActor.getActorById(actorId).then(function(data){
      $scope.actor = data;
    });

    getActorsMovies.getMoviesByActorId(actorId).then(function(data){     
      $scope.actorsMovies = data;
    });     

  }]);
