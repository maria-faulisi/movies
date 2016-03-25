'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getSingleMovie
 * @description
 * # getSingleMovie
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getSingleMovie', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function getMovieById(movieId){
      return $http({
        method: 'GET',         
        url: 'http://api.themoviedb.org/3/movie/' + movieId + '?api_key=6618d88ff7dd12a477917a27cb83763e'})
      .then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
          console.log(response);
      });      
    }

    return {
      getMovieById: getMovieById
    };

  }]);
