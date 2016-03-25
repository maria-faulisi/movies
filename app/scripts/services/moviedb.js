'use strict';

/**
 * @ngdoc service
 * @name moviesApp.movieDb
 * @description
 * # movieDb
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('movieDb', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var apiKey = '6618d88ff7dd12a477917a27cb83763e';

    return{
      apiKey: apiKey
    };
  });
