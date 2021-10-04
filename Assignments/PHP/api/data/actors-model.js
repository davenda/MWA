const mongoose = require('mongoose');

module.exports.actorSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    age: Number,
    nationality: String,
    
});