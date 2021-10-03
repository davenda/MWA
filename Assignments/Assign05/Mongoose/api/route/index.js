const express = require('express');
const router = express.Router();
const route = require('../controller/games.controller');

router.route('/games')
    .get(route.getGames)
    .post(route.addGame);
router.route('/games/:gameId')
    .get(route.getOne)
    .patch(route.modifyGame)
    .put(route.replaceGame)
    .delete(route.deleteGame);

module.exports = router;