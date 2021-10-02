const express = require('express');
// const dbconnection = require('../data/dbconnection');
const router = express.Router();
const route = require('../controller/games.controller')

router
    // .route('/json')
    //     .get(route.gamesGetAll)
    //     .post(function(req, res){
    //         console.log("Recieved post request");
    //         res.status(200).json("This is a post message");


    //     })
    .route('/getAllGames')
        .get(route.gamesGetAll)
router.route('/getOneGame/:gameId')
        .get(route.gamesGetOne)
router.route('/addOneGame')
        .get(route.gamesAddOne)

module.exports = router;