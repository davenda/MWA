angular
    .module('MyFirstApp')
    .controller('JokeController', JokeController);
function JokeController($routeParams, JokeFactory){
    const vm = this;
    const jokeId = $routeParams.jokeId;
    JokeFactory
        .getOneJoke(jokeId)
        .then(function(res){
            vm.jokeData = res.value
    });
}