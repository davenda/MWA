angular
    .module('MyFirstApp', ['ngRoute'])
    .config(config);
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'main/main.html',
            controller: 'MainController',
            controllerAs: 'mainCtrl'
        })
        .when('/about', {
            templateUrl: 'about/about.html',
            controller: 'AboutController',
            controllerAs: 'aboutCtrl'
        })
        .when('/joke/:jokeId', {
            templateUrl: 'joke/joke.html',
            controller: 'JokeController',
            controllerAs: 'jokeCtrl'
        })
        .otherwise({
            template:'<h1>Oops...</h1>'
            // redirectTo: '/'
        });
}