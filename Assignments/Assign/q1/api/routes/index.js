const express = require('express');
const router = express.Router();

const gameData = require('../data/games.json');

router
    .route('/json')
        .get(function(req, res){
            console.log("Recieved get request");
            res.status(200).json(gameData);
        })
        .post(function(req, res){
            console.log("Recieved post request");
            res.status(200).json("This is a post message");
        });

module.exports = router;