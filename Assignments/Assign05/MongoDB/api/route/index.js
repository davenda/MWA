const express = require('express');
const route = require('../controller/games.controller');
const router = express.Router();

router.route('/games')
    .get(route.getGames)
    .post(route.addGames);

module.exports = router;