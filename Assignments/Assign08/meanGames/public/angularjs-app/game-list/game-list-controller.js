angular
    .module('meanGames')
    .controller('GamesController', GamesController);
function GamesController(GamesDataFactory){
    const vm = this;
    vm.title = 'MEAN Games App';
    GamesDataFactory
        .getAllGames()
        .then(function(res){
            vm.list = res;
            console.log(res);
        });
}