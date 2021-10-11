require('./trips-model');
const mongoose = require('mongoose');
const dbName = process.env.DATABASE_NAME;
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl + dbName);
mongoose.connection.on('connected', function(){
    console.log('Mongoose Connected');
})