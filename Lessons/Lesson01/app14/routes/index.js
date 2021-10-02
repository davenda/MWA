const express = require('express');
const controllerGames = require('../controller/games.controller');
const router = express.Router();

router.route('/json')
   // .get(controllerGames.gamesGetAll())
    .post(function(req, res){
        console.log("JSON POST request");
        res.status(200).json({
            'jsonData': false
        });
    });

module.exports = router;