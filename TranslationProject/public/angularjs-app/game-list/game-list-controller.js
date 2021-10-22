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
    vm.addGame = function(){
        console.log('vm.addGame called');
        const postData = {
            title: vm.newGameTitle,
            price: vm.newGamePrice,
            rate: vm.newGameRating,
            year: vm.newGameYear,
            minPlayer: vm.newGameMinPlayers, 
            maxPlayer: vm.newGameMaxPlayers, 
            minAge: vm.newGameMinAge,
            designer: vm.newGameDesigner
        }
       
        if(vm.gameForm.$valid){
            GamesDataFactory.addGame(postData)
                .then(function(response){
                    console.log('Game Saved', response);
                })
                .catch(function(err){
                    console.log(err);
                })
        }
        else{
            vm.isSubmitted;
        }
    }
}