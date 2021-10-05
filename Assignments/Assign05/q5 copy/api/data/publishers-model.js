const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});