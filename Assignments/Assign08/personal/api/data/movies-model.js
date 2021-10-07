const mongoose = require('mongoose');
const actorSchema = require('./actors-model');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    actors: [actorSchema]
})

mongoose.model('Movie', movieSchema, 'movies');