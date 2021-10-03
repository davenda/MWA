const express = require('express');
const router = express.Router();
const route = require('../controller/games.controller');

router.route('/games').get(route.getGames);
router.route('/games/:gameId').get(route.getOne)

module.exports = router;