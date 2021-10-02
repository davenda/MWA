const express = require('express');
const router = express.Router();
const route = require('../controller/games.controller');

router.route('/games').get(route.getGames);

module.exports = router;