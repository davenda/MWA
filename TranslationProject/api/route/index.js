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
    .get(gameController.getOneGame)
    .delete(gameController.deleteGame)
    .put(gameController.updateGame);

router.route('/games/:gameId/publisher')
    .get(publisherController.getPublisher)
    .post(publisherController.setPublisher);

router.route('/games/:gameId/reviews')
    .get(reviewController.getReviews)
    .post(reviewController.addReview);

router.route('/games/:gameId/reviews/:reviewId')
    .get(reviewController.getOneReview);

router.route('/users/register')
    .post(userController.register);

router.route('/user/login')
    .post(userController.login);
    
module.exports = router;