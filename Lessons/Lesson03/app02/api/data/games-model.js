const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: Number, 
    minAge: Number, 
    rate: {
        type: Number,
        min: 1,
        max: 5,
        'default': 1
    },
    designers: [String]
});

//if we didn't specify the third parameter it takes the first parameter, make the first letter small
//and add s at the end of the word and take it as third letter

mongoose.model('Game', gameSchema, 'games');