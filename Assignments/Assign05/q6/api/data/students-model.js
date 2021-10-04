const mongoose = require('mongoose');
const courseSchema = require('./courses-model');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    GPA: {
        type: Number,
        required: true
    },
    courses: [courseSchema]
});

mongoose.model('Student', studentSchema, 'students');