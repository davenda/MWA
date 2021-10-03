const express = require('express');
require('../data/db');
const ObjectId = require('mongodb').ObjectId;
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
        res.status(200).json(games);
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

const addGame = function(req, res) {
    console.log('Add Game Reques');
    const newGame = req.query;
    // const newGame = {
    //     'title': req.query.title,
    //     'year': req.query.year,
    //     'rate': req.query.rate,
    //     'price': req.query.price,
    //     'minPlayers': req.query.minPlayers,
    //     'maxPlayers': req.query.maxPlayers,
    //     'publisher': req.query.publisher,
    //     'reviews': req.query.reviews,
    //     'minAge': req.query.minAge,
    //     'designer': req.query.designer
    // };
    Game.create(newGame, function(err, resp){
        if (err) {
            console.log('Error Occurred', err);
            res.status(200).send('Failed to add a game to database.')
        } else {
            console.log('Game Added Successfully');
            res.status(200).send('Game Added Succesfully');
        }
    })
}

const modifyGame = function(req, res){
    console.log('Modify Game Request');
    const gameId = req.params.gameId;
    const updateData = req.query;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send('Not a valid Game ID');
        return;
    }
    Game.findById(gameId).exec(function(err, game){
        if(err){
            console.log('Failed to get a game', err);
            res.status(200).send('Error Occurred during modifying a game.');
        }
        else{
            Object.keys(updateData).forEach(function(key){
                game[key] = updateData[key];
            })
            game.save(function(err, updatedGame){
                if(err){
                    console.log(err);
                    res.status(500).send(err.message);
                }
                else{
                    res.status(200).json(updatedGame);
                }
            });
        }
    });
}

const replaceGame = function(req, res){
    console.log('Replace Game Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send(gameId + ' is not a valid Game ID');
        return;
    }
    Game.findById(gameId).select('_id').exec(function(err, game){
        if(err){
            console.log(err);
            res.status(200).send('Error getting game data');
        }
        else{
            console.log(game);
            Object.keys(req.query).forEach(function(key){
                game[key] = req.query[key];
            })
            game.save(function(err, response){
                if(err){
                    console.log(err)
                    res.status(200).send('Error Occurred during game replace.');
                }
                else{
                    res.status(200).send(response)
                }
            });
        }
    })
}

const deleteGame = function(req, res){
    console.log('Delete Game Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send(gameId + ' is not a valid Game ID');
    }
    Game.findByIdAndDelete(gameId, function(err, response){
        if(err){
            console.log(err);
            res.status(200).send('Error Occurred deleting a game');
        }else{
            res.status(200).send(response);
        }
    })

}

module.exports = {
    getGames: getGames,
    getOne: getOne,
    addGame: addGame,
    modifyGame: modifyGame,
    replaceGame: replaceGame,
    deleteGame: deleteGame
}