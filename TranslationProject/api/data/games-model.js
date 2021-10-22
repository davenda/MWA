const mongoose = require('mongoose');
const publisherSchema = require('./publishers-model');
const reviewSchema = require('./reviews-model');
// console.log(publisherSchema);
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    minAge: Number, 
    rate: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    year: Number,
    minPlayer: Number,
    maxPlayer: Number,
    designer: String, 
    publisher: publisherSchema,
    reviews: [reviewSchema]
});

mongoose.model('Game', gameSchema, 'games');
