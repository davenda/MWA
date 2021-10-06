angular
    .module('MyFirstApp')
    .controller('JokeController', JokeController);
function JokeController($routeParams, JokeFactory){
    const vm = this;
    const jokeId = $routeParams.jokeId;
    $http.get('http://api.icndb.com/jokes/' + jokeId)
        .then(function(res){
            vm.jokeData = res.data.value;
        })
    // JokeFactory.getOneJoke(jokeType).then(function(res){
    //     vm.joke = response[0]
    // })
}