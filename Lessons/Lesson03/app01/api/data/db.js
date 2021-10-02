const mongoose = require('mongoose');
const dbName = 'newTestDB';
const dbUrl = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(dbUrl);

mongoose.connection.on('connected', function(){
    console.log('Mongoose connected');
})

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
})

mongoose.connection.on('error', function(){
    console.log('Error Occurred');
})

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose disconnected by app termination');
        process.exit(0);
    })
})