const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    character: String,
    profile_path: String,
    popularity: Number
});