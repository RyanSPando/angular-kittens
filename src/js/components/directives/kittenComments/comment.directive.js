(function () {

  'use strict';

  angular
  .module('myApp')
  .directive('comment', comment);
  function comment () {
    return {
      restrict: 'E',
      scope: '=',
      link: function(scope, elem, attrs) {
      },
      templateUrl:'/js/components/directives/kittenComments/view.comment.html'
    };
  }
})();
