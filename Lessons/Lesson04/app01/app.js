require('dotenv').config({'path':'.env'});
const express = require('express');
const path = require('path');

const app = express();

if(isNaN(process.env.PORT)){
    process.env.PORT = 6000;
}

const server = app.listen(process.env.PORT, function(){
    console.log('Listening to port ', server.address().port);
})