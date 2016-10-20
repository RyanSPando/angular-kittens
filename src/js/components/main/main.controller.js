(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', '$location', '$rootScope', 'kittenService'];

  function mainController($scope, $location, $rootScope, kittenService) {
    /*jshint validthis: true */
    var vm = this;
    vm.commentName = '';
    vm.comment = '';

    vm.kittens = Object.assign([], kittenService.getAllKittens());

    vm.addKitten = () => {
      $location.path('/new');
    };

    vm.home = () => {
      $location.path('/');
    };

    vm.toggleComments = (index) => {
      vm.kittens[index].showComments = kittenService.toggleComments(index);
      if (vm.kittens[index].showComments) {
        $location.path(`/comments/${index}`);
      }
      else {
        $location.path(`/`);
      }

    };

    vm.toggleAddComment = (index) => {
      vm.kittens[index].showAddComment = kittenService.toggleAddComment(index);
    };

    vm.upVote = (index) => {
      vm.kittens[index].kittenRating = kittenService.upVote(index);
    };

    vm.downVote = (index) => {
      vm.kittens[index].kittenRating = kittenService.downVote(index);
    };

    vm.addComment = (index) => {
      const newComment = {name: vm.commentName, comment: vm.comment};
      kittenService.addComment(index, newComment);
      vm.kittens[index].showAddComment = false;
      vm.commentName = '';
      vm.comment = '';
      // $scope.formie.$setPristine();
    };
  }

})();
