const express = require('express');
const studentController = require('../controller/students-controller');
const router = express.Router();

router.route('/students')
    .get(studentController.getAll);
router.route('/students/:studentId')
    .get(studentController.getStudent)

module.exports = router;