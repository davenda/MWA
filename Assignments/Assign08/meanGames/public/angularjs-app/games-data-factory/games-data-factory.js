angular
    .module('meanGames')
    .factory('GamesDataFactory', GamesDataFactory);
function GamesDataFactory($http) {
    return {
        getAllGames: getAllGames,
        getOneGame: getOneGame,
        postGame: postGame
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
    function postGame(game){
        return $http
            .post('/api/games/', game)
            .then(complete)
            .catch(failed);
    }
    function complete(res){
        return res.data;
    }
    function failed(error){
        console.log(error);
        return error.status.statusText
    }
}