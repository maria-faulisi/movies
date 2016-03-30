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
          if(response.data.cast[i]['release_date'] != "null"){
            var originalDate = response.data.cast[i]['release_date'];
            var momentDate = moment.utc(originalDate, "MM-DD-YYYY");
            var momentDateOnly = momentDate.format();
            response.data.cast[i]['release_date'] = momentDateOnly;
          }          
        }

        for(var x = 0; x < response.data.cast.length; x++){
          console.log( typeof(response.data.cast[x]['release_date']));
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
