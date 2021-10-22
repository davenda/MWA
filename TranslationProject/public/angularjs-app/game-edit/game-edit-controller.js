angular
    .module('meanGames')
    .controller('GameEditController', GameEditController)
function GameEditController(GamesDataFactory, $routeParams){
    const vm = this;
    console.log($routeParams);
    GamesDataFactory
        .getOneGame($routeParams.gameId)
        .then(function(response){
            vm.game = response;
            console.log(vm.game);
        })
    vm.editGame = function(){
        if(vm.gameForm.$valid){
            console.log(vm.game);
            GamesDataFactory
                .modifyGame(vm.game)
                .then(function(response){
                    window.location = '/#/games/' + vm.game._id;
                })
                .catch(function(err){

                });
        }

    }
}