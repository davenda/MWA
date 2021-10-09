angular
    .module('meanGames')
    .controller('GamesController', GamesController);
function GamesController($http){
    const vm = this;
    vm.title = 'MEAN Games App';
    vm.isSubmitted = false;
    $http
        .get('/api/games')
        .then(function(res){
            vm.list = res;
        });
    vm.addGame = function(){
        const postData = {
            title = vm.newGameTitle,
            price: vm.newGamePrice,
            rate: vm.newGameRating,
            year: vm.newGameYear,
            rating: vm.newGameRating, 
            minPlayers: vm.newGameMinPlayers, 
            maxPlayers: vm.newGameMaxPlayers, 
            minAge: vm.newGameMinAge,
        }
        if(vm.gameForm.$valid){
            $http.post('/api/games', postData)
            .then(function(err, response){
                if(err){
                    console.log(err);
                }
                else{
                    console.log('Game Saved');
                }
            })
        }
        else{
            vm.isSubmitted;
        }
    }
}