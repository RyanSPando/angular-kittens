(function() {

  'use strict';

  $(document).ready(function() {
    $('select').material_select();
  });

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/js/components/main/view.home.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .when('/new', {
        templateUrl: '/js/components/kitten/view.kitten.html',
        controller: 'kittenController',
        controllerAs: 'kittenCtrl'
      })
      .when('/comments/:id', {
        templateUrl: '/js/components/main/view.home.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }
})();
