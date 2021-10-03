const mongoose = require('mongoose');
require('./games-model');

const dbName = 'newTTestDB';
const dbUrl = 'mongodb://127.0.0.1:27017/' + dbName;

mongoose.connect(dbUrl);
mongoose.connection.on('connected', function() {
    console.log('Mongoose Connected');
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose Disconnected');
});

mongoose.connection.on('error', function(){
    console.log('Error Occurred');
})

process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log('App closed by app termination');
    });
} )