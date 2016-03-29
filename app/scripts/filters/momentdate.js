'use strict';

/**
 * @ngdoc filter
 * @name moviesApp.filter:momentDate
 * @function
 * @description
 * # momentDate
 * Filter in the moviesApp.
 */
angular.module('moviesApp')
  .filter('momentDate', function () {
    return function (input) {
      var momentDate = moment(input);
      console.log(momentDate);
      return momentDate;
    };
  });
