const express = require('express');
const router = express.Router();
const gameController = require('../controller/games.controller');
const publisherController = require('../controller/publishers.controller');
const reviewController = require('../controller/reviews.controller');
const userController = require('../controller/users.controller');

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

router.route('/games/:gameId/reviews')
    .get(reviewController.getReviews)
    .post(reviewController.addReview);

router.route('/games/:gameId/reviews/:reviewId')
    .get(reviewController.getOneReview);

router.route('/users')
    .post(userController.register)
    .get(userController.login);
module.exports = router;