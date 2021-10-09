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
    budget: Number,
    genres: [String],
    imdb_id: String,
    overview: String,
    poster_path: String,
    production_companies: {
        name: String,
        country: String,
        logo_path: String
    },
    release_date: Date,
    revenue: Number,
    actors: [actorSchema]
})

mongoose.model('Movie', movieSchema, 'movies');