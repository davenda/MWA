const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});