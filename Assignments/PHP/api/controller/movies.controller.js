const mongoose = require('mongoose');
const actorSchema = require('../data/actors-model')

const Movie = mongoose.model('Movie');
const Actor = mongoose.model('Actor', actorSchema);
module.exports.getAllMovies = function(req, res){
    console.log('Get All Movies Request');
    let offset = 5;
    let count = 5;
    if(req.params.offset && req.params.count){
        offset = req.params.offset;
        count = req.params.count;
        if(isNaN(offset) || isNaN(count)){
            res.send(400).send('Offset and count should be valid numbers');
            return;
        }
    }
    Movie.find()
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
    const movieData = new Movie(req.query);
    
    if(req.query.name){
        const actorData = {
            'name': req.query.name,
            'age': req.query.age,
            'nationality': req.query.country
        };
        movieData.actors.push(new Actor(actorData));
    }
    console.log(movieData);
    Movie.create(req.query, function(err, response){
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
    const movieId = req.params.movieId;
    if(!mongoose.Types.ObjectId.isValid(movieId)){
        res.status(200).send('Not a valid Movie Id');
        return;
    }
    Movie.findById(movieId).exec(function(err, movie){
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
    const movieId = req.params.movieId;
    const updateData = req.query;
    if(!mongoose.Types.ObjectId.isValid(movieId)){
        res.status(200).send('Not a valid Movie ID');
        return;
    }
    Movie.findById(movieId).exec(function(err, movie){
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
    const movieId = req.params.movieId;
    if(!mongoose.Types.ObjectId.isValid(movieId)){
        res.status(200).send(movieId + ' is not a valid Movie ID');
        return;
    }
    Movie.findById(movieId).select('_id').exec(function(err, movie){
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
    const movieId = req.params.movieId;
    if(!mongoose.Types.ObjectId.isValid(movieId)){
        res.status(200).send(movieId + ' is not a valid Movie ID');
    }
    Movie.findByIdAndDelete(movieId, function(err, response){
        if(err){
            console.log(err);
            res.status(200).send('Error Occurred deleting a movie');
        }else if(!response){
            res.status(404).send('Movie ID doesn\'t exist in the System');
        } else{
            console.log(response);
            res.status(200).send('Movie Deleted Successfully');
        }
    })

}