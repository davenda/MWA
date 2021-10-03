const mongoose = require("mongoose");
const Student = mongoose.model('Student');

module.exports.getCourses = function(req, res){
    console.log('Get Courses Request');
    const studentId = req.params.studentId;
    if(!mongoose.Types.ObjectId.isValid(studentId)){
        res.status(400)
            .send('Not a valid Student ID');
        return;
    }
    Student.findById(studentId)
        .select('courses')
        .exec(function(err, response){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred');
            }
            else if(!response){
                res.status(404)
                    .send('Student Id not found in the system.');
            }
            else{
                res.status(200)
                    .send(response);
            }
        });
};

module.exports.getOneCourse = function(req, res){
    console.log('Get Course By ReviewId Request');
    const studentId = req.params.studentId;
    const reviewId = req.params.reviewId;
    console.log(req.params);

    if(!mongoose.Types.ObjectId.isValid(studentId)){
        res.status(400).send('Not a Valid Student Id');
        return;
    }
    Student.find({'_id': studentId, 'courses': {'$elemMatch': {'_id': courseId}}})
        .select('courses')
        .exec(function(err, response){
            if(err){
                console.log(err);
                res.status(500)
                    .send('Internal Error Occurred.');
            }
            else if(!response){
                res.status(404)
                    .send('Student ID not found in the system.')
            }
            else{
                res.status(200)
                    .send(response);
            }
        })
}

module.exports.addCourse = function(req, res){
    console.log('Add Course Request');
    const studentId = req.params.studentId;
    if(!mongoose.Types.ObjectId.isValid(studentId)){
        res.status(400).send('Not a valid Student ID');
        return;
    }
    Student.findById(studentId)
        .select('courses')
        .exec(function(err, course){
            if(err){
                console.log(err);
                res.status(500).send('Failed to get a Student with studentId', studentId);
            }
            else{
                console.log(req.query);
                if(course.courses[0] == ''){
                    course.courses.pop();
                }
                course.courses.push(req.query);
                console.log(course);
                course.save(function(err, response){
                    if(err){
                        console.log(err);
                        res.status(500).send(err.message);
                    }
                    else{
                        res.status(201).send(response);
                    }
                })
            }
        })
}