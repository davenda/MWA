const express = require('express');

const router = express.Router();

router.route('/json')
    .get(function(req, res){
        console.log("JSON GET request");
        res.status(200).json({
            'jsonData': true
        });
    })
    .post(function(req, res){
        console.log("JSON POST request");
        res.status(200).json({
            'jsonData': false
        });
    });

module.exports = router;