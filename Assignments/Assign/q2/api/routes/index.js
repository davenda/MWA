const express = require('express');
const router = express.Router();

router
    .route('/multiply/:num1')
        .get(function(req, res){
            const num1 = req.params.num1;
            const num2 = req.query.num2;

            console.log("Num1", num1);
            console.log("Num2", num2);
            res.status(200).json(
                {
                    'Num1': num1,
                    'Num2': num2,
                    'Result': num1 * num2
                }
            );
        })

module.exports = router;