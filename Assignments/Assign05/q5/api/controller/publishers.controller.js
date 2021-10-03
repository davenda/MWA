require('../data/db');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const getPublisher = function(req, res){
    console.log('Get Publisher Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200)
            .send('Not a valid Game ID');
        return;
    }
    Game.findById(gameId)
        .select('publisher')
        .exec(function(err, game){
            if(err){
                console.log(err);
                res.status(200)
                    .send('Internal Error Occurred.');
            }
            else if(!game){
                res.status(404)
                    .send('Game ID not found in the system.');
            }
            else{
                res.status(200)
                    .json(game)
            }
        })
}

const setPublisher = function(req, res){
    console.log('Set Publisher Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send('Not a Valid Game Id');
        return;
    }
    const publisher = req.query;
    Game.findByIdAndUpdate(gameId, {'publisher': publisher})
        .exec(function(err,  response){
            if(err){
                console.log(err);
                res.status(200).send('Internal Error Occurred')
            }
            else if(!response){
                res.status(404).send('Game ID not find in the System.');
            }
            else{
                console.log(response);
                res.status(200).json(response);
            }
        })
}

module.exports = {
    getPublisher: getPublisher,
    setPublisher: setPublisher
}