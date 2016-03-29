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

        for (var i = 0; i < response.data.cast.length; i++) {
          var originalDate = response.data.cast[i]['release_date'];

          if(originalDate != "null"){
            var momentDate = moment(originalDate, "MM-DD-YYYY");
            originalDate = momentDate;
          }          
        }

        return response.data.cast;

      }, function errorCallback(response){
        console.log(response);
      });
    }

    return{
      getMoviesByActorId: getMoviesByActorId
    };
  }]);
