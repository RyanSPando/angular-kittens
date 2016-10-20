(function() {

  'use strict';

  angular
    .module('myApp.components.kitten', [])
    .controller('kittenController', kittenController);

  kittenController.$inject = ['$scope', '$rootScope', '$location', 'kittenService'];

  function kittenController($scope, $rootScope, $location, kittenService) {
    /*jshint validthis: true */
    var vm = this;

    vm.kittenName = '';
    vm.kittenUrl = '';
    vm.kittenBio = '';
    vm.submitKitten = () => {
      const newKitten = {
        kittenName: vm.kittenName,
        kittenUrl: vm.kittenUrl,
        kittenBio: vm.kittenBio,
        kittenRating: 0,
        kittencomments: [],
        showComments: false,
        showAddComment: false
      };
      kittenService.addKitten(newKitten);
      vm.kittenName = '';
      vm.kittenUrl = '';
      vm.kittenBio = '';
      $scope.kittenForm.$setPristine();
      $location.path('/');
    };

  }

})();
