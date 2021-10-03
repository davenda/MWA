const mongoose = require('mongoose');
const publisherSchema = new mongoose.Schema({
    type: [String],
    location: String
});
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
    publisher: publisherSchema,
    year: Number,
    minPlayer: Number,
    maxPlayer: Number,
    reviews: [String],
    designers: String
});

mongoose.model('Game', gameSchema, 'games');
