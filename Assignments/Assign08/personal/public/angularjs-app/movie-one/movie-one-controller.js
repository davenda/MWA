angular
    .module('MovieApp')
    .controller('MovieController', MovieController)
function MovieController($routeParams, $http){
    const vm = this;
    $http
        .get('/api/movies/' + $routeParams.movieId)
        .then(function(res){
            vm.movieDetails = res.data;
            console.log(res.data);
        })
}