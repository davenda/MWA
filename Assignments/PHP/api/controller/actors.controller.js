const mongoose = require("mongoose");
const Movie = mongoose.model('Movie');

module.exports.getActors = function(req, res){
    console.log('Get Actor Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(400)
            .send('Not a valid Movie ID');
        return;
    }
    Movie.findById(gameId)
        .select('actors')
        .exec(function(err, response){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred');
            }
            else if(!response){
                res.status(404)
                    .send('Movie Id not found in the system.');
            }
            else{
                res.status(200)
                    .send(response);
            }
        });
};

module.exports.getOneActor = function(req, res){
    console.log('Get Actor By ActorId Request');
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    console.log(req.params);

    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(400).send('Not a Valid Movie Id');
        return;
    }
    Movie.find({'_id': gameId, 'actors': {'$elemMatch': {'_id': reviewId}}})
        .select('actors')
        .exec(function(err, response){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred.');
            }
            else if(!response){
                res.status(404)
                    .send('Movie ID not found in the system.')
            }
            else{
                res.status(200)
                    .send(response);
            }
        })
}

module.exports.addActor = function(req, res){
    console.log('Add Actor Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(400).send('Not a valid Movie ID');
        return;
    }
    Movie.findById(gameId)
        .select('actors')
        .exec(function(err, actor){
            if(err){
                console.log(err);
                res.status(500).send('Failed to get a Movie with GameID', gameId);
            }
            else{
                console.log(req.query);
                if(actor.actors[0] == ''){
                    actor.actors.pop();
                }
                actor.actors.push(req.query);
                console.log(actor);
                actor.save(function(err, response){
                    if(err){
                        console.log(err);
                        res.status(500).send(err.message);
                    }
                    else{
                        res.status(201).send(response);
                    }
                })
            }
        })
}