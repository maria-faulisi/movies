'use strict';

/**
 * @ngdoc service
 * @name moviesApp.convertToMoment
 * @description
 * # convertToMoment
 * Service in the moviesApp.
 */
angular.module('moviesApp')
  .service('convertToMoment', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function convertStringToMoment(stringDate){
      var newMoment = moment(stringDate, "MM-DD-YYYY");
      return newMoment;

      return{
        convertStringToMoment: convertStringToMoment
      }
    }
  });
