(function () {
  'use strict';

  angular
  .module('myApp.components.kitten')
  .service('kittenService', kittenService);
  kittenService.$inject = ['$http'];

  function kittenService($http) {
    var vm = this;
    const kittens = [
      {
        kittenName: 'Bobo',
        kittenUrl: 'https://placekitten.com/200/200',
        kittenBio: 'I love long walks on the back of the couch and staring at birds at the window',
        kittenRating: 10,
        kittenComments: [
          {name: 'dog', comment: 'lol'},
          {name: 'Bob', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
          {name: 'Laura', comment: 'I think that comment was too long.'}
        ],
        showComments: false,
        showAddComment: false
      },
      {
        kittenName: 'Jojo',
        kittenUrl: 'https://placekitten.com/300/300',
        kittenBio: 'Eating bugs that try to eat my food that I refuse to eat',
        kittenRating: -2,
        kittenComments: [{name: 'dog', comment: 'Bugs are tasty'}],
        showComments: false,
        showAddComment: false
      }
  ];
    //gets all kittens
    vm.getAllKittens = () => kittens;
    //gets one kitten
    vm.getKitten = (index) => kittens[index];
    //adds a kitten to the array and returns updated array
    vm.addKitten = (kitten) => kittens.push(kitten);
    //add a comment to a kitten and returns that kitten comments
    vm.addComment = (index, comment) => kittens[index].kittenComments.push(comment);
    //up votes kitten rating and returns that kitten rating
    vm.upVote = (index) => ++kittens[index].kittenRating;
    //down votes kitten rating and returns that kitten rating
    vm.downVote = (index) => --kittens[index].kittenRating;
    //changes view of kittens
    vm.toggleComments = (index) => {
      let showComment = kittens[index].showComments;
      showComment ? showComment = false: showComment = true;
      return showComment;
    };
    vm.toggleAddComment = (index) => {
      let showAddComment = kittens[index].showAddComment;
      showAddComment ? showAddComment = false: showAddComment = true;
      return showAddComment;
    };
  }
})();
