angular
    .module('meanGames')
    .directive('gameRating', GameRating);
function GameRating(){
    return {
        restring: 'E',
        templateUrl: 'angular-app/game-rating/rating.html',
        bindToController: true,
        controller: 'GameController',
        controllerAs: 'vm',
        scope:{
            stars: '@'
        }
    }
}