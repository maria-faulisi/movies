'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getTopRatedMovies
 * @description
 * # getTopRatedMovies
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getTopRatedMovies', ['$http', 'movieDb', function ($http, movieDb) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getAllTopRatedMovies(){
      return $http({
        method: 'GET',
        url: 'http://api.themoviedb.org/3/movie/top_rated/?api_key=' + movieDb.apiKey
      }).then(function successCallback(response) {
          return response.data.results;
        }, function errorCallback(response) {
          console.log(response);
        });  
    }  

    return {
      getAllTopRatedMovies: getAllTopRatedMovies
    };
  }]);
