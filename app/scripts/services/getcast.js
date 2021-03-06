'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getCast
 * @description
 * # getCast
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getCast', ['$http', 'movieDb', function ($http, movieDb) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getMovieCast(movieId){
      return $http({
        method: 'GET',         
        url: 'http://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=' + movieDb.apiKey})
      .then(function successCallback(response){
        return response.data.cast;        
      }, function errorCallback(response){
          console.log(response);        
      });
    }

    return {
      getMovieCast: getMovieCast
    };    
  }]);
