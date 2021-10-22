angular
    .module('MovieApp')
    .controller('MoviesController', MoviesController)
function MoviesController(MovieDataFactory, $routeParams, $window, $location, $route){
    const vm = this;
    if(Object.keys($routeParams).length === 0){
        $routeParams.offset = 0;
        $routeParams.count = 5;
    }
    vm.offset = $routeParams.offset;
    vm.count = $routeParams.count;
    vm.array = new Array(5);
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
                window.location.reload();
                MovieDataFactory
                    .addMovie(movieData)
                    .then(function(response){
                        vm.addStatus = 'Movie Added Successfully';
                    })
                    .catch(function(err){
                        vm.addStatus = err;
                    })
            }
        }
        vm.searchMovie = function(){    
            if(vm.movieForm.$valid){
                window.location = "#!/movies?offset=0&count=5&title=" + vm.movieTitle;
            }
        }
}
