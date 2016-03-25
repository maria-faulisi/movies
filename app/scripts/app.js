'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 * # moviesApp
 *
 * Main module of the application.
 */
angular
  .module('moviesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chickens', {
        templateUrl: 'views/chickens.html',
        controller: 'chickensCtrl',
        controllerAs: 'chickens'
      })
      .when('/singleMovie/:movieId', {
        templateUrl: 'views/singlemovie.html',
        controller: 'SinglemovieCtrl',
        controllerAs: 'singleMovie'
      })
      .when('/actor/:actorId', {
        templateUrl: 'views/actor.html',
        controller: 'ActorCtrl',
        controllerAs: 'actorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
