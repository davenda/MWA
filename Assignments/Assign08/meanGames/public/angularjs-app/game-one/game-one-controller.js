angular
    .module('meanGames')
    .controller('GameController', GameController);
function GameController($routeParams, $http){
    const vm = this;
    $http
        .get('/api/games/' + $routeParams.gameId)
        .then(function(res){
            vm.game = res.data;
            console.log(vm.game)
        })
}