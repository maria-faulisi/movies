'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getTopRatedMovies
 * @description
 * # getTopRatedMovies
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getTopRatedMovies', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getAllTopRatedMovies(){
      return $http({
        method: 'GET',
        url: 'http://api.themoviedb.org/3/movie/top_rated/?api_key=6618d88ff7dd12a477917a27cb83763e'
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
