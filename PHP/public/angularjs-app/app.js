angular
    .module('MovieApp', ['ngRoute'])
    .config(config);
function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'angularjs-app/main/welcome.html'
        })
        .when('/movies', {
            templateUrl: 'angularjs-app/movie-list/movies.html',
            controller: 'MoviesController',
            controllerAs: 'vm'
        })
        .when('/edit/:movieId', {
            templateUrl: 'angularjs-app/movie-edit/movie-edit.html',
            controller: 'MovieEditController',
            controllerAs: 'vm'
        })
        .when('/movies/:movieId', {
            templateUrl: 'angularjs-app/movie-one/movie.html',
            controller: 'MovieController',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: 'angularjs-app/about/about.html'
        })
        .otherwise({
            templateUrl: 'angularjs-app/main/welcome.html'
        })
}