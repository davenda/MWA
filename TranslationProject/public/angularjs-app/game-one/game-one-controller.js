angular
    .module('meanGames')
    .controller('GameController', GameController);
function GameController($routeParams, GamesDataFactory){
    const vm = this;
    function _getStarRating(rate){
        return new Array(rate);
    }
    GamesDataFactory
        .getOneGame($routeParams.gameId)
        .then(function(res){
            vm.game = res;
            vm.rating = _getStarRating(res.rate);
        });

    vm.deleteGame = function(gameId){
        GamesDataFactory
            .deleteGame(gameId)
            .then(function(response){
                window.location = "#/games";              
            })
    }

    vm.editGame = function(gameId){
        console.log(gameId);
        window.location = "#/edit/" + gameId
    }
}

