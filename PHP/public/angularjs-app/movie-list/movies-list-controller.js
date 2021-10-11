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
            vm.pageTitle = 'Available Movies'
        })
    vm.addMovie = function(){
        const movieData = {
            title: vm.title,
            release_date: vm.release_date,
            budget: vm.budget,
            genres: vm.genres,
            imdb_id: vm.imdb_id,
            overview: vm.overview,
            poster_path: vm.poster_path,
            revenue: vm.revenue,
        }
        console.log(movieData);
        console.log(vm.movieForm.$valid);
        if(vm.movieForm.$valid){
            MovieDataFactory
                .addMovie(movieData)
                .then(function(response){
                    vm.addStatus = response;
                })
                .catch(function(err){
                    vm.addStatus = err;
                })
        }

    }
}
