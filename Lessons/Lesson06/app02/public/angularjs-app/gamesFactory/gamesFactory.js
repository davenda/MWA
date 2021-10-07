angular
    .module('meanGames', ['ngRoute'])
    .factory('GamesFactory', GamesFactory);
function GamesFactory($http) {
    return {
        getAllGames: getAll
    }
    function name(params) {
        
    }
}