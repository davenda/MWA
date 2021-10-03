const mongoose = require('mongoose');

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
    designers: String
});

mongoose.model('Game', gameSchema, 'games');
