'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:SingleMovieCtrl
 * @description
 * # SingleMovieCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('SinglemovieCtrl', ['$scope', 'getSingleMovie', '$routeParams', 'getCast', function ($scope, getSingleMovie, $routeParams, getCast) {
    var currentMovieId = $routeParams.movieId;    

    getSingleMovie.getMovieById(currentMovieId).then(function(data){
      $scope.singleMovie = data;
    });   

    getCast.getMovieCast(currentMovieId).then(function(data){
      $scope.movieCast = data;      
    });

  }]);
