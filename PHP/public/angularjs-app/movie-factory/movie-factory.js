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
        let query = '';
        Object.keys(page).forEach(function(key){
            query = query + key + '=' + page[key] + '&';
        });
        console.log(query);
        return $http
            .get('/api/movies?' + query)
            .then(complete)
            .catch(failed);
    }
    function addMovie(movieData){
        return $http
            .post('/api/movies', movieData)
            .then(complete)
            .catch(failed);
    }
    function modifyMovie(movieData){
        return $http
            .patch('/api/movies/' + movieData._id, movieData)
            .then(complete)
            .catch(failed)
    }
    function deleteMovie(movieId){
        console.log(movieId);
        return $http
            .delete('/api/movies/' + movieId)
            .then(complete)
            .catch(failed);
    }
    function complete(response){
        // console.log(response.data)
        return response.data;
    }
    function failed(err){
        return err.status.statusText;
    }
}