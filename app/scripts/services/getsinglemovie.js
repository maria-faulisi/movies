'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getSingleMovie
 * @description
 * # getSingleMovie
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getSingleMovie', ['$http', 'movieDb', function ($http, movieDb) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getMovieById(movieId){
      return $http({
        method: 'GET',         
        url: 'http://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + movieDb.apiKey})
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
