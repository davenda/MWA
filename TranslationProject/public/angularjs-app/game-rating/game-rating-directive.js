angular
    .module('meanGames')
    .directive('gameRating', GameRating);
function GameRating(){
    return {
        restrict: 'E',
        // replace: true,
        templateUrl: 'angularjs-app/game-rating/rating.html'
    }
}