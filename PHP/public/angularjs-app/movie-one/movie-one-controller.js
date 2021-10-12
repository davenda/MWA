angular
    .module('MovieApp')
    .controller('MovieController', MovieController)
function MovieController(MovieDataFactory, $routeParams){
    const vm = this;
    MovieDataFactory
        .getOneMovie($routeParams.movieId)
        .then(function(response){
            vm.movieDetails = response;
        })
    vm.deleteMovie = function(){
        MovieDataFactory
            .deleteMovie(vm.movieDetails._id)
            .then(function(){
              window.location = '#/movies';  
            })
    }
}