(function () {

  'use strict';

  angular
  .module('myApp')
  .directive('kittenLikes', likes);
  likes.$inject = ['kittenService'];
  function likes (kittenService) {
    return {
      restrict: 'E',
      scope: '=',
      link: function(scope, elem, attrs) {
        scope.kittens = Object.assign([], kittenService.getAllKittens());
        scope.upVote = (index) => {
          kittenService.upVote(index);
        };

        scope.downVote = (index) => {
          kittenService.downVote(index);
        };
      },
      templateUrl:'/js/components/directives/kittenLikes/view.likes.html'
    };
  }
})();
