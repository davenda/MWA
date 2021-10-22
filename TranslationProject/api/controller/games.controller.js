require('../data/db');
const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const validator = mongoose.Types.ObjectId.isValid;

const _responder = function (res, err, data) {
    console.log('_responder called');
    if (err) {
        console.log(err);
        res.status(500)
            .json(err.message);
    }
    else if (!data) {
        // console.log('Game Not Found');
        res.status(404)
            .json('Game Not Found');
    }
    else {
        console.log(data)
        res.status(200)
            .json(data);
    }
}

const getGames = function(req, res) {
    console.log('Get Specified number of games request');
    let count;
    let offset;
    if(!req.query.count || !req.query.offset){
        offset = 0;
        count = 5;
    }
    else if(isNaN(req.query.offset) || isNaN(req.query.count)){
        res.status(400).json('Offset and Count should be valid numbers')
        return;
    }
    else if(parseInt(req.query.offset) < 0 || parseInt(req.query.count) < 0){
        res.status(400).json('Offset and Count should be positive numbers');
        return;
    }
    else{
        offset = parseInt(req.query.offset);
        count = parseInt(req.query.count);
    }
    offset = 0;
    count = 10;
    Game.find()
        .limit(count)
        .skip(offset)
        .exec((err, data) => _responder(res, err, data));
}

const getOneGame = function(req, res) {
    console.log('Get One game request');
    const gameId = req.params.gameId
    if (!validator(gameId)) {
        res.status(400)
            .json('Invalid Game Id');
        return;
    }
    Game.findById(gameId)
        .exec((err, data) => _responder(res, err, data));
}

const addGame = function(req, res) {
    console.log('Add Game Request');
    const newGame = new Game(req.body);
    // console.log(newGame);
    Game.create(newGame, function(err, resp){
        if (err) {
            console.log('Error Occurred', err);
            res.status(200).json('Failed to add a game to database.')
        } else {
            console.log(resp);
            res.status(201).json('Game Added Succesfully');
        }
    });
}

const modifyGame = function(req, res){
    console.log('Modify Game Request');
    const gameId = req.params.gameId;
    const newData = req.query;
    if (!validator(gameId)) {
        res.status(400)
            .json('Invalid Game Id');
        return;
    }
    Game.findById(gameId)
        .exec(function (err, response) {
            if (err) {
                console.log(err);
                res.status(500)
                    .json(err.message);
            }
            else if (!response) {
                // console.log('Game Not Found');
                res.status(404)
                    .json('Game Not Found')
            }
            else {
                // Object.keys(newData).forEach(function (key) {
                //     response[key] = newData[key];
                // })
                response.title = newData['title'];
                response.year = newData['year'];
                response.rate = newData['rate'];
                response.price = newData['price'];
                response.minPlayers = newData['minPlayers'];
                response.maxPlayers = newData['maxPlayers'];
                response.minAge = newData['minAge'];
                response.save((err, updatedData) => _responder(res, err, updatedData));
            }
        })
}

const updateGame = function(req, res){
    console.log('Replace Game Request');
    const gameId = req.params.gameId;
    const newData = req.body;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200)
            .send(gameId + ' is not a valid Game ID');
        return;
    }
    Game.findById(gameId)
        .select('_id')
        .exec(function(err, game){
        if(err){
            console.log(err);
            res.status(200).send('Error getting game data');
        }
        else{
            console.log(game);
            // Object.keys(req.body).forEach(function(key){
            //     game[key] = req.body[key];
            // })
            game.title = newData['title'];
            game.year = newData['year'];
            game.rate = newData['rate'];
            game.price = newData['price'];
            game.minPlayers = newData['minPlayers'];
            game.maxPlayers = newData['maxPlayers'];
            game.minAge = newData['minAge'];
            console.log(game);
            game.save(function(err, response){
                if(err){
                    console.log(err)
                    res.status(200).send('Error Occurred during game replace.');
                }
                else{
                    console.log(response);
                    res.status(200).send(response)
                }
            });
        }
    });
}

const deleteGame = function(req, res){
    console.log('Delete Game Request');
    const gameId = req.params.gameId;
    if (!validator(gameId)) {
        res.status(400)
            .json('Invalid Game Id');
        return;
    }
    Game.findByIdAndDelete(gameId)
        .exec((err, data) => _responder(res, err, data));
}

module.exports = {
    getGames: getGames,
    getOneGame: getOneGame,
    addGame: addGame,
    modifyGame: modifyGame,
    deleteGame: deleteGame,
    updateGame: updateGame
}