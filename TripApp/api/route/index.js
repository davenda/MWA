const express = require('express');
const tripController = require('../controller/trips.controller')
const router = express.Router();

router.route('/trips')
    .get(tripController.getTrips)
    .post(tripController.addTrip);
router.route('/trips/:tripId')
    .get(tripController.getOneTrip)
    .patch(tripController.modifyTrip)
    .delete(tripController.deleteTrip);
module.exports = router;