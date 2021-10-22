angular
    .module('meanGames', ['ngRoute'])
    .config(config);
function config($routeProvider, $locationProvider) { 
    $locationProvider.hashPrefix("");
    $routeProvider
        .when('/games', {
            templateUrl: 'angularjs-app/game-list/games.html',
            controller: 'GamesController',
            controllerAs: 'vm'
        })
        .when('/games/:gameId', {
            templateUrl: 'angularjs-app/game-one/game.html',
            controller: 'GameController',
            controllerAs: 'vm'
        })
        .when('/edit/:gameId', {
            templateUrl: 'angularjs-app/game-edit/game-edit.html',
            controller: 'GameEditController',
            controllerAs: 'vm'
        })
        .when("/register", {
            templateUrl: "angularjs-app/register/register.html",
            controller: "RegisterController",
            controllerAs: "vm",
            access: { restricted: false }
          })
        .otherwise({
            templateUrl: '/angularjs-app/main/welcome.html'
        })
}