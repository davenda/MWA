require('../data/db');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const getGames = function(req, res) {
    console.log('Get Specified number of games request');
    let offset = 0;
    let count = 5;

    if(req.query.count && req.query.offset){
        console.log(req.query);
        if(isNaN(parseInt(req.query.offset)) || isNaN(parseInt(req.query.count))){
            res.status(200).send('Offset and Count must be numbers.');
            return;
        }
        else{
            offset = parseInt(req.query.offset) < 0 ? 0 : parseInt(req.query.offset);
            count = parseInt(req.query.count) < 1 ? 5 : parseInt(req.query.count);
        }
    }
    Game.find().skip(offset).limit(count).exec(function(err, games){
        if (err) {
            console.log(err);
            res.status(200).send('Error Retrieving data');
        } else {
            res.status(200).json(games);
        }
    });
}

const getOne = function(req, res) {
    console.log('Get One game request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send('Not a valid Game Id');
        return;
    }
    Game.findById(gameId).exec(function(err, game){
        if (err) {
            console.log('Error Occured', err);
            res.status(200).send('Internal Error Occurred.');
        } else if(!game){
            res.status(404).send('Game ID not found in the system.');
        }else{
            res.status(200).json(game);
        }
    })
}

module.exports = {
    getGames: getGames,
    getOne: getOne
}