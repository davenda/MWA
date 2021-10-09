angular
    .module('meanGames')
    .controller('GameController', GameController);
function GameController($routeParams, GamesDataFactory){
    const vm = this;
    // $http
    //     .get('/api/games/' + $routeParams.gameId)
    //     .then(function(res){
    //         vm.game = res.data;
    //     })
    function _getStarRating(rate){
        return new Array(rate);
    }
    GamesDataFactory
        .getOneGame($routeParams.gameId)
        .then(function(res){
            vm.game = res;
            vm.rating = _getStarRating(res.rate);
        });
}