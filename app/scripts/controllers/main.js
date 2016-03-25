'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('MainCtrl', ['$scope', '$http', 'getTopRatedMovies', function ($scope, $http, getTopRatedMovies) {

    $scope.allTopRatedMovies = {};

    getTopRatedMovies.getAllTopRatedMovies().then(function(data){
      $scope.allTopRatedMovies = data;
    });  
   
  }]);
