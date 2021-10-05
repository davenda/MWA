const express = require('express');
const studentController = require('../controller/students-controller');
const courseController = require('../controller/courses-controller');
const router = express.Router();

router.route('/students')
    .get(studentController.getAllStudents)
    .post(studentController.addStudent);
router.route('/students/:studentId')
    .get(studentController.getStudent)
    .patch(studentController.modifyStudent)
    .put(studentController.replaceStudent)
    .delete(studentController.deleteStudent);
router.route('/students/:studentId/courses')
    .get(courseController.getCourses)
    .post(courseController.addCourse);
router.route('/students/:studentId/courses/:courseId')
    .get(courseController.getOneCourse);

module.exports = router;