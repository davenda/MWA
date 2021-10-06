angular
    .module('MyFirstApp')
    .controller('JokeController', JokeController);
function JokeController($http, $routeParams){
    const vm = this;
    const jokeId = $routeParams.jokeId;
    $http.get('http://api.icndb.com/jokes/' + jokeId)
        .then(function(res){
            vm.jokeData = res.data.value;
        })
}