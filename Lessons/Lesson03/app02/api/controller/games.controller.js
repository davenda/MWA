
const dbconnection = require("../data/dbconnection");
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');

const Game = mongoose.model('Game');//may be accessed by anothere controllers too

const getOne = function(req, res){
    console.log('Get OneGame Controller');
    const gameId = ObjectId(req.params.gameId);
    console.log(gameId);
    // console.log(req.params.gameId);
    // const db = dbconnection.get();
    // const collection = db.collection('games');
    // collection.findOne({_id: ObjectId(gameId)}, function(err, game){
    //     if(err){
    //         console.log(err);
    //         res.status(501).send('Error Occured. Check the console.');
    //     }
    //     else{
    //         console.log(game);
    //         res.status(201).json(game);
    //     }
    // });
    Game.findById(gameId).exec(function(err, game){
        if(err){
            res.status(200).json(err);
        }
        else{
            if(game){
                console.log('Found game', game);
                res.status(200).json(game);
            }
            else{
                res.status(404).json('Not found')
            }
        }

    })

}

const addOne = function(req, res){
    console.log('Get AddOne Request');
    const db = dbconnection.get();
    const collection = db.collection('games');

    if(req.body && req.body.title && req.body.price){
        console.log('req.body', req.body);
        let newGame = {};
        newGame.title = req.body.title;
        newGame.price = parseFloat(req.body.price);

        collection.insertOne(newGame, function(err, response){
            if(err){
                res.status(500).json({
                    error: err
                });
            }
            else{
                res.status(201).json(response);
            }
        });
    }
    else{
        res.status(200).send('No body');
    }
}

const getAll = function(req, res){
    console.log('Get All Game Controller');
    const gameId = req.params.gameId;
    const db = dbconnection.get();
    const collection = db.collection('games');
    let offset = 0;
    let count = 5;

    collection.find().toArray(function(err, games){
        console.log('Found games', games);
        if(err){
            res.status(500).json({
                error: err
            });
        }
        else{
            res.status(201).json(games);
        }
    });
}

const deleteOneGame = function(req, res){
    console.log("Delete One Game");
    const collection = dbconnection.get().collection('games');
    collection.delete({name})
}

module.exports = {
    gamesGetOne: getOne,
    gamesGetAll: getAll,
    gamesAddOne: addOne
}