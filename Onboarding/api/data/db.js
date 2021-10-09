const mongoose = require('mongoose');
require('./jobPosts-model');

const dbUrl = process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME;

mongoose.connect(dbUrl + dbName);
mongoose.connection.on('connected', function(){
    console.log('Mongoose Connected');
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose Disconnected');
});

mongoose.connection.on('error', function(){
    console.log('Error Occured');
});

process.on('SIGTERM', function() {
    mongoose.connection.close(function(){
        console.log('Mongoose Disconnected By App termination');
        process.exit(0);
    })
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose Disconnected By App termination');
        process.exit(0);
    })
});

// process.on('SIGUSR2', function(){
//     mongoose.connection.close(function(){
//         console.log('Mongoose Disconnected by App termination')
//         process.kill(process.pid, "SIGUSR2");
//     })
// });