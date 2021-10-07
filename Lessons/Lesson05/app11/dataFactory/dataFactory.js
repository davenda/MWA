angular
    .module('MyFirstApp')
    .factory('JokeFactory', JokeFactory);
function JokeFactory($http){
    return {
        getTenJokes: getTenJokes,
        getOneJoke: getOneJoke
    }
    function getTenJokes(){
        return $http
            .get('http://api.icndb.com/jokes/random/10')
            .then(complete)
            .catch(failed);
    }
    function getOneJoke(jokeId){
        return $http  
            .get('http://api.icndb.com/jokes/' + jokeId)
            .then(complete)
            .catch(failed);
    }
    function complete(res){
        return res.data;
    }
    function failed(err){
        return err.statusText;
    }
}