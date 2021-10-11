angular
    .module('MovieApp')
    .factory('MovieDataFactory', MovieDataFactory);
function MovieDataFactory($http){
    return {
        getOneMovie: getOneMovie,
        getMovies: getMovies,
        addMovie: addMovie,
        modifyMovie: modifyMovie,
        deleteMovie: deleteMovie
    }
    function getOneMovie(movieId){
        return $http
            .get('/api/movies/' + movieId)
            .then(complete)
            .catch(failed);
    } 
    function getMovies(page){
        return $http
            // .get('/api/movies', data)
            .get('/api/movies?count=' + page.count + '&offset=' + page.offset)
            .then(complete)
            .catch(failed);
    }
    function addMovie(movieData){
        return $http
            .post('/api/movies', movieData)
            .then(complete)
            .catch(failed);
    }
    function modifyMovie(movieId){
        return $http
            .patch('/api/movie/' + movieId)
            .then(complete)
            .catch(failed)
    }
    function deleteMovie(movieId){
        return $http
            .deleteMovie('/api/movie/' + movieId)
            .then(complete)
            .catch(failed);
    }
    function complete(response){
        console.log(response.data)
        return response.data;
    }
    function failed(err){
        return err.status.statusText;
    }
}