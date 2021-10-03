const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    'name': String,
    code: {
        type: String,
        required: true
    }
})