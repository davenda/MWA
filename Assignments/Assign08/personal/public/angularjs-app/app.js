angular
    .module('MovieApp', ['ngRoute'])
    .config(config);
function config($routeProvider){
    $routeProvider
        .when('/movies', {
            templateUrl: 'angularjs-app/movie-list/movies.html',
            controller: 'MoviesController',
            controllerAs: 'vm'
        })
        .when('/movies/:movieId', {
            templateUrl: 'angularjs-app/movie-one/movie.html',
            controller: 'MovieController',
            controllerAs: 'vm'
        })
        .otherwise({
            template:'<h3>You are in a wrong place.</h3>'
        })
}