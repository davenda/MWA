angular
    .module('meanGames')
    .controller('GamesController', GamesController)
    .controller('GameController', GameController);
function GamesController(GamesDataFactory){
    const vm = this;
    vm.title = 'MEAN Games App';
    GamesDataFactory
        .getAllGames()
        .then(function(res){
            vm.list = res;
            console.log(res);
        });
    vm.addGame = function(){
        const postData = {
            title: vm.gameTitle,
            price: vm.gamePrice
        }
        if(vm.gameForm.$isValid()){
            GamesDataFactory
                .adOneGame()
                .then(function(){

                })
        }
    }
}