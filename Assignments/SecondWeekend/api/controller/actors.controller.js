const https = require('https')
const mongoose = require("mongoose");
const { resourceLimits } = require('worker_threads');
const Movie = mongoose.model('Movie');

module.exports.getActors = function (req, res) {
    console.log('Get Actor Request');
    const movieId = req.params.movieId;
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
        res.status(400)
            .send('Not a valid Movie ID');
        return;
    }
    Movie.findById(movieId)
        .select('actors')
        .exec(function (err, response) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred');
            }
            else if (!response) {
                res.status(404)
                    .send('Movie Id not found in the system.');
            }
            else {
                res.status(200)
                    .send(response.actors);
            }
        });
};

module.exports.getOneActor = function (req, res) {
    console.log('Get Actor By ActorId Request');
    const actorId = req.params.actorId;
    const movieId = req.params.movieId;
    console.log(req.params);
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
        res.status(400).send('Not a Valid Movie Id');
        return;
    }
    Movie.findById(movieId)
        .select('actors')
        .exec(function (err, movie) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred.');
            }
            else if (!movie) {
                res.status(404)
                    .send('Movie ID not found in the system.')
            }
            else {
                res.status(200)
                    .send(movie.actors.id(actorId));
            }
        })
}

module.exports.addActor = function (req, res) {
    console.log('Add Actor Request');
    const movieId = req.params.movieId;
    console.log(movieId);
    if (!mongoose.Types.ObjectId.isValid(movieId)) {
        res.status(400).send('Not a valid Movie ID');
        return;
    }
    Movie.findById(movieId)
        .select('actors')
        .exec(function (err, movie) {
            console.log(movie);
            if (err) {
                console.log(err);
                res.status(500).send('Failed to get a Movie with Movie ID', movieId);
            }
            else if (!movie) {
                res.status(404).send('Movie Id not found in the system');
            }
            else {
                console.log(req.query);
                movie.actors.push(req.query);
                console.log(movie);
                movie.save(function (err, response) {
                    if (err) {
                        console.log(err);
                        res.status(500).send(err.message);
                    }
                    else {
                        res.status(201)
                            .json({
                                message: 'Actor Added to the System.',
                                studentData: response
                            });
                    }
                })
            }
        })
}

module.exports.getAllActors = function (req, res) {
    Movie.find()
        .select('actors')
        .exec(function (err, actors) {
            if (err) {
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurs');
            }
            else if (!actors) {
                res.status(404)
                    .send('Actor not found in the system');
            }
            else {
                res.status(200)
                    .send(actors);
            }
        })
}

module.exports.loadActors = function (req, res) {
    console.log('Load Actors POST Request');
    let movieData = new Movie(req.query);
    Movie.find()
        // .limit(1)
        .exec(function (err, movies) {
            for (let movie of movies) {
                const url = "https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=b9a6d45f63a2a6e27b818fe2438eef82";
                https.get(url, actors => {
                    let data = '';
                    actors.on('data', chunk => {
                        data += chunk;
                    });
                    actors.on('end', () => {
                        data = JSON.parse(data);
                        for (let i = 0; i < 5; i++) {
                            console.log(data.cast[i]);
                            movie.actors.push(data.cast[i]);
                        }
                        movie.save(function (err, response) {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                console.log('Added Actors')
                            }
                        })
                    })
                }).on('error', err => {
                    console.log(err.message);
                })
            }

        })
        res.send('Done')

}