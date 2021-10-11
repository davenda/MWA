const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    tripDuration: Number,
    "\'start station id\'": Number,
    "\'start station name\'": String,
    "\'end station id\'": Number,
    "\'end station name\'": String,
    bikeid: Number,
    usertype: String,
    "'birth year'": Number,
    gender: Number,
    // "'start station location'": {
    //   type: 'Point',
    // //   coordinates: [lat, lng]
    // },
    // "'end station location'": { 
    //     type: 'Point', 
    //     // coordinates: [lat, lng] 
    // },
    "'start time'": Date,
    "'stop time'": Date
})

mongoose.model('Trip', tripSchema, 'trips');