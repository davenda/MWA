angular
    .module('MovieApp')
    .directive('movieSearching', MovieSearching);
function MovieSearching(){
    return {
        restrict: "E",
        templateUrl: 'angularjs-app/movie-search/movie-search.html',
        bindToController: true,
        controller: "MoviesController",
        controllerAs: "vm",
        scope: {
        stars: "@" }
    }
}