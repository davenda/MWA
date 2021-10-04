const mongoose = require('mongoose');
const Movies = mongoose.model('Movie');

module.exports.getAllMovies = function(req, res){
    console.log('Get All Movies Request');
    let offset = 0;
    let count = 5;
    if(req.params.offset && req.params.count){
        offset = req.params.offset;
        count = req.params.count;
        if(isNaN(offset) || isNaN(count)){
            res.send(400).send('Offset and count should be valid numbers');
            return;
        }
    }
    Movies.find()
        .skip(offset)
        .limit(count)
        .exec(function(err, movies){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred');
            }
            else if(!movies){
                res.status(404)
                    .send('Movie Not Found');
            }
            else{
                res.status(200)
                    .json(movies);
            }
        })
}

module.exports.addMovie = function(req, res){
    console.log('Add Movie POST Request');
    const movieData = req.query;
    movieData.actors = [];
    
    if(movieData.name){
        movieData.actors.push({
            'name': movieData.name,
            'age': movieData.age,
            'country': movieData.country
        })
    }
    console.log(req.query);
    Movies.create(req.query, function(err, response){
        if(err){
            res.status(500).send(err.message);
            console.log(err);
        }
        else{
            res.status(201).json(response);
        }
    });
}

module.exports.getOneMovie = function(req, res) {
    console.log('Get One movie request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send('Not a valid Movie Id');
        return;
    }
    Movie.findById(gameId).exec(function(err, movie){
        if (err) {
            console.log('Error Occured', err);
            res.status(200).send('Internal Error Occurred.');
        } else if(!movie){
            res.status(404).send('Movie ID not found in the system.');
        }else{
            res.status(200).json(movie);
        }
    })
}

module.exports.modifyMovie = function(req, res){
    console.log('Modify Movie Request');
    const gameId = req.params.gameId;
    const updateData = req.query;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send('Not a valid Movie ID');
        return;
    }
    Movie.findById(gameId).exec(function(err, movie){
        if(err){
            console.log('Failed to get a movie', err);
            res.status(400).send('Error Occurred during modifying a movie.');
        }
        else{
            Object.keys(updateData).forEach(function(key){
                movie[key] = updateData[key];
            })
            movie.save(function(err, updatedMovie){
                if(err){
                    console.log(err);
                    res.status(500).send(err.message);
                }
                else{
                    res.status(200).json(updatedMovie);
                }
            });
        }
    });
}

module.exports.replaceMovie = function(req, res){
    console.log('Replace Movie Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send(gameId + ' is not a valid Movie ID');
        return;
    }
    Movie.findById(gameId).select('_id').exec(function(err, movie){
        if(err){
            console.log(err);
            res.status(200).send('Error getting movie data');
        }
        else{
            console.log(movie);
            Object.keys(req.query).forEach(function(key){
                movie[key] = req.query[key];
            })
            movie.save(function(err, response){
                if(err){
                    console.log(err)
                    res.status(200).send('Error Occurred during movie replace.');
                }
                else{
                    res.status(200).send(response)
                }
            });
        }
    })
}

module.exports.deleteMovie = function(req, res){
    console.log('Delete Movie Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send(gameId + ' is not a valid Movie ID');
    }
    Movie.findByIdAndDelete(gameId, function(err, response){
        if(err){
            console.log(err);
            res.status(200).send('Error Occurred deleting a movie');
        }else{
            res.status(200).send(response);
        }
    })

}