'use strict';

/**
 * @ngdoc filter
 * @name moviesApp.filter:truncateParagraph
 * @function
 * @description
 * # truncateParagraph
 * Filter in the moviesApp.
 */
angular.module('moviesApp')
  .filter('truncateParagraph', function () {
    return function (input) {
      var arrayOfStrings = input.split(' ');
      var arrayToString = arrayOfStrings.slice(0, 30).join(' ');

      if(arrayOfStrings.length > 30){
        arrayToString += '...';
      }

      return arrayToString;
    };
  });
