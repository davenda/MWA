require('../data/db');
const mongoose = require('mongoose');

const Student = mongoose.model('Student');

module.exports.getAll = function(req, res) {
    console.log('Get Specified number of Students request');
    let offset = 0;
    let count = 5;

    if(req.query.count && req.query.offset){
        console.log(req.query);

        if(isNaN(parseInt(req.query.offset)) || isNaN(parseInt(req.query.count))){
            res.status(200).send('Offset and Count must be numbers.');
            return;
        }
        else{
            offset = parseInt(req.query.offset) < 0 ? 0 : parseInt(req.query.offset);
            count = parseInt(req.query.count) < 1 ? 5 : parseInt(req.query.count);
        }
    }

    Student.find().skip(offset).limit(count).exec(function(err, students){
        if (err) {
            res.status(200).send('Error Retrieving data');
        } else {
            res.status(200).json(students);
        }
    });
}

module.exports.getStudent = function(req, res) {
    console.log('Get One Student request');
    const studentId = req.params.studentId;
    if(!mongoose.Types.ObjectId.isValid(studentId)){
        res.status(200).send('Not a valid Student Id');
        return;
    }
    Student.findById(studentId).exec(function(err, student){
        if (err) {
            console.log('Error Occured', err);
            res.status(200).send('Internal Error Occurred.');
        } else if(!student){
            res.status(404).send('Student ID not found in the system.');
        }else{
            res.status(200).json(student);
        }
    })
}