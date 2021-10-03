const express = require('express');
const router = express.Router();
const gameController = require('../controller/games.controller');
const publisherController = require('../controller/publishers.controller');

router.route('/games')
    .get(gameController.getGames)
    .post(gameController.addGame);

router.route('/games/:gameId')
    .get(gameController.getOne)
    .patch(gameController.modifyGame)
    .put(gameController.replaceGame)
    .delete(gameController.deleteGame);

router.route('/games/:gameId/publisher')
    .get(publisherController.getPublisher)
    .post(publisherController.setPublisher);

module.exports = router;