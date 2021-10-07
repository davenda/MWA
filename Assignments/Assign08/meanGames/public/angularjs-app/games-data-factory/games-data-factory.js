angular
    .module('meanGames')
    .factory('GamesDataFactory', GamesDataFactory);
function GamesDataFactory($http) {
    return {
        getAllGames: getAllGames,
        getOneGame: getOneGame
    }
    function getAllGames() {
        return $http
            .get('/api/games')
            .then(complete)
            .catch(failed);
    }
    function getOneGame(gameId){
        return $http
            .get('/api/games/' + gameId)
            .then(complete)
            .catch(failed);
    }
    function complete(res){
        console.log(res);
        return res.data;
    }
    function failed(error){
        console.log(err);
        return error.status.statusText
    }
}