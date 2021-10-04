const express = require('express');
require('../data/db')
const router = express.Router();
const moviesController = require('../controller/movies.controller');
const actorController = require('../controller/actors.controller');

router.route('/movies')
    .get(moviesController.getAllMovies)
    .post(moviesController.addMovie);
router.route('/movies/:movieId')
    .get(moviesController.getOneMovie)
    .put(moviesController.replaceMovie)
    .patch(moviesController.modifyMovie)
    .delete(moviesController.deleteMovie);
router.route('/movies/:movieId/actors')
    .get(actorController.getActors)
    .post(actorController.addActor);
router.route('/movies/:movieId/actors/:actorId')
    .get(actorController.getOneActor);

module.exports = router;