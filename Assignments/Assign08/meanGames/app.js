require('dotenv').config({path: '.env'})
const express = require('express');
const path = require('path');
const route = require('./api/route')

const app = express();
if(isNaN(process.env.PORT)){
    process.env.PORT = 3000;
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use("/api", route);
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

const server = app.listen(process.env.PORT, function(){
    console.log('Listening to port', server.address().port);
}) 