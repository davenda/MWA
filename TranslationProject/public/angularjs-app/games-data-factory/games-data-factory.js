angular
    .module('meanGames')
    .factory('GamesDataFactory', GamesDataFactory);
function GamesDataFactory($http) {
    return {
        getAllGames: getAllGames,
        getOneGame: getOneGame,
        addGame: addGame,
        modifyGame: modifyGame,
        deleteGame: deleteGame
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
    function addGame(game){
        return $http
            .post('/api/games/', game)
            .then(complete)
            .catch(failed);
    }
    function modifyGame(game){
        return $http
            .put('/api/games/' + game._id, game)
            .then(complete)
            .catch(failed);
    }
    function deleteGame(gameId){
        return $http
            .delete('/api/games/' + gameId)
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