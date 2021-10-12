angular
    .module('MovieApp')
    .controller('MovieEditController', MovieEditController)
function MovieEditController(MovieDataFactory, $routeParams){
    const vm = this;
    console.log($routeParams);
    MovieDataFactory
        .getOneMovie($routeParams.movieId)
        .then(function(response){
            vm.movieDetails = response;
            console.log(vm.movieDetails);
        })
    vm.editMovie = function(){
        if(vm.movieForm.$valid){
            console.log(vm.movieDetails);
            MovieDataFactory
                .modifyMovie(vm.movieDetails)
                .then(function(response){
                    window.location = '/#/movies/' + vm.movieDetails._id;
                })
                .catch(function(err){

                })
        }

    }
}