angular
    .module('meanGames', ['ngRoute'])
    .config(config);
function config($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'angularjs-app/main/welcome.html',
    })
    .when('/games', {
        templateUrl: 'angularjs-app/game-list/game.html',
        controller: 'GamesController',
        controllerAs: 'GamesCtrl'
    })
    .when('/games/:gameId', {
        templateUrl: 'angularjs-app/game-one/game.html',
        controller: 'GameController',
        controllerAs: 'GameCtrl'
    })
        // .when('/getOne', {
        //     templateUrl: 'game-list/game'
        // })
}