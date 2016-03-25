'use strict';

/**
 * @ngdoc service
 * @name moviesApp.getActor
 * @description
 * # getActor
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('getActor', ['$http','movieDb', function ($http, movieDb) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function getActorById(actorId){
      return $http({
        method: 'GET', 
        url: 'http://api.themoviedb.org/3/person/' + actorId + '?api_key=' + movieDb.apiKey
      }).then(function successCallback(response){
        return response.data;
      }, function errorCallback(response){
        console.log(response);
      });
    }

    return {
      getActorById: getActorById
    };
  }]);
