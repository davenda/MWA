const express = require('express');
const dbconnection = require('../data/dbconnection');
const router = express.Router();
const route = require('../controller/games.controller')

router.route('/getAllGames')
        .get(route.gamesGetAll)
router.route('/getOneGame/:gameId')
        .get(route.gamesGetOne)
router.route('/addOneGame')
        .get(route.gamesAddOne)
router.route('/getSpecificGames')
        .get(route.specificGames)
module.exports = router;