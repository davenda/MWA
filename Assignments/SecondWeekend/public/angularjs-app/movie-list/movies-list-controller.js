angular
    .module('MovieApp')
    .controller('MoviesController', MoviesController)
function MoviesController(MovieDataFactory, $routeParams){
    const vm = this;
    if(Object.keys($routeParams).length === 0){
        $routeParams.offset = 0;
        $routeParams.count = 5;
    }
    vm.offset = $routeParams.offset;
    vm.count = $routeParams.count;
    vm.array = new Array(5);
    console.log($routeParams);
    MovieDataFactory
        .getMovies($routeParams)
        .then(function(response){
            vm.movies = response;
            vm.title = 'Available Movies'
        })
}
