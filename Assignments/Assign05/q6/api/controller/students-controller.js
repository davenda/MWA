require('../data/db');
const mongoose = require('mongoose');

const Student = mongoose.model('Student');

module.exports.getAllStudents = function(req, res) {
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

module.exports.addStudent = function(req, res) {
    console.log('Add Student Reques');
    const newStudent = req.query;
    Student.create(newStudent, function(err, resp){
        if (err) {
            console.log('Error Occurred', err);
            res.status(200).send('Failed to add a student to database.')
        } else {
            console.log('Student Added Successfully');
            res.status(201).send('Student Added Succesfully');
        }
    })
}

module.exports.modifyStudent = function(req, res){
    console.log('Modify Student Request');
    const gameId = req.params.gameId;
    const updateData = req.query;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send('Not a valid Student ID');
        return;
    }
    Student.findById(gameId).exec(function(err, student){
        if(err){
            console.log('Failed to get a student', err);
            res.status(400).send('Error Occurred during modifying a student.');
        }
        else{
            Object.keys(updateData).forEach(function(key){
                student[key] = updateData[key];
            })
            student.save(function(err, updatedStudent){
                if(err){
                    console.log(err);
                    res.status(500).send(err.message);
                }
                else{
                    res.status(200).json(updatedStudent);
                }
            });
        }
    });
}

module.exports.replaceStudent = function(req, res){
    console.log('Replace Student Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send(gameId + ' is not a valid Student ID');
        return;
    }
    Student.findById(gameId).select('_id').exec(function(err, student){
        if(err){
            console.log(err);
            res.status(200).send('Error getting student data');
        }
        else{
            console.log(student);
            Object.keys(req.query).forEach(function(key){
                student[key] = req.query[key];
            })
            student.save(function(err, response){
                if(err){
                    console.log(err)
                    res.status(200).send('Error Occurred during student replace.');
                }
                else{
                    res.status(200).send(response)
                }
            });
        }
    })
}

module.exports.deleteStudent = function(req, res){
    console.log('Delete Student Request');
    const gameId = req.params.gameId;
    if(!mongoose.Types.ObjectId.isValid(gameId)){
        res.status(200).send(gameId + ' is not a valid Student ID');
    }
    Student.findByIdAndDelete(gameId, function(err, response){
        if(err){
            console.log(err);
            res.status(200).send('Error Occurred deleting a student');
        }else{
            res.status(200).send(response);
        }
    })

}