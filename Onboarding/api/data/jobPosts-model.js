const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    country: String,
    state: String,
    city: String,
    zip_code: Number
});

const jobPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }, 
    location: locationSchema,
    description: String,
    exprience: Number,
    skills: [String],
    postDate: Date
});

mongoose.model('JobPost', jobPostSchema, 'jobPost');