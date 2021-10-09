const express = require('express')
const jobPostController = require('../controller/jobPosts.controller');
const router = express.Router(); 

router.route('/posts')
    .get(jobPostController.getPosts)
    .post(jobPostController.addPost)
router.route('/posts/:postId')
    .get(jobPostController.getOnePost)
    .post(jobPostController.modifyPost)
    .delete(jobPostController.deletePost)
    // .patch(jobPostController.modify);

module.exports = router;