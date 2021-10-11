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
}