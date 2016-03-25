'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getActorsMovies
 * @description
 * # getActorsMovies
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getActorsMovies', ['$http', 'movieDb', function ($http, movieDb) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getMoviesByActorId(actorId){
      return $http({
        method: 'GET',
        url: 'http://api.themoviedb.org/3/person/' + actorId + '/movie_credits?api_key=' + movieDb.apiKey
      }).then(function successCallback(response){
        return response.data.cast;
      }, function errorCallback(response){
        console.log(response);
      });
    }

    return{
      getMoviesByActorId: getMoviesByActorId
    };
  }]);
