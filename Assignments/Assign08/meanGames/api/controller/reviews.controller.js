const mongoose = require("mongoose");
const Game = mongoose.model('Game');

module.exports.getReviews = function(req, res){
    console.log('Get Review Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(400)
            .send('Not a valid Game ID');
        return;
    }
    Game.findById(gameId)
        .select('reviews')
        .exec(function(err, game){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred');
            }
            else if(!game){
                res.status(404)
                    .send('Game Id not found in the system.');
            }
            else{
                res.status(200)
                    .send(game.reviews);
            }
        });
};

module.exports.getOneReview = function(req, res){
    console.log('Get Review By ReviewId Request');
    const gameId = req.params.gameId;
    const reviewId = req.params.reviewId;
    console.log(req.params);

    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(400).send('Not a Valid Game Id');
        return;
    }
    Game.findById(gameId)
        .select('reviews')
        .exec(function(err, response){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred.');
            }
            else if(!response){
                res.status(404)
                    .send('Game ID not found in the system.')
            }
            else{
                const review = response.reviews.id(reviewId);
                if(!review){
                    res.status(404)
                        .send('Review ID not found in the system.');
                }
                else{
                    res.status(200)
                        .send(response.reviews.id(reviewId));
                }
            }
        })
}

module.exports.addReview = function(req, res){
    console.log('Add Review Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(400).send('Not a valid Game ID');
        return;
    }
    Game.findById(gameId)
        .select('reviews')
        .exec(function(err, game){
            if(err){
                console.log(err);
                res.status(500).send('Failed to get a Game with GameID', gameId);
            }
            else if(!game){
                res.status(404).send('Game Id not found in the system.');
            }
            else{
                game.reviews.push(req.query);
                game.save(function(err, response){
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
