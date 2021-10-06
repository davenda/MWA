angular
    .module('MyFirstApp', ['ngRoute'])
    .config(config);
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'template/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'template/about.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl'
        })
        .when('/joke/:jokeId', {
            templateUrl: 'template/joke.html',
            controller: 'JokeController',
            controllerAs: 'jokeCtrl'
        })
        .otherwise({
            template:'<h1>Oops...</h1>'
            // redirectTo: '/'
        });
}