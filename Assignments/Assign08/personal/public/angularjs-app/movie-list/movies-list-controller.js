angular
    .module('MovieApp')
    .controller('MoviesController', MoviesController)
function MoviesController($http){
    const vm = this;
    $http
    .get('/api/movies')
    .then(function(res){
        vm.movies = res.data;
        vm.title = 'List Of Movies'
        console.log(res);
    });
}
