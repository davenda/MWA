const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    country: String,
    state: String,
    city: String,
    street: String,
    zip: Number
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
    location: {
        type: {
            country: String,
            state: String,
            city: String,
            street: String,
            zip: Number
        },
        required: true
    },
    description: String,
    exprience: Number,
    skills: [String],
    postDate: Date
});


mongoose.model('Location', locationSchema, 'location');
mongoose.model('JobPost', jobPostSchema, 'jobPost');