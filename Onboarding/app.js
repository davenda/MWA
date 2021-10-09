require('dotenv').config({'path': '.env'})
const express = require('express');
const path = require('path');
const route = require('./api/route');

const app = express();

if(isNaN(process.env.PORT)){
    process.env.PORT = 3000;
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: true}));
app.use('/', function(req, res, next){
    console.log(req.method, req.url);
    next();
})
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/api', route);

const server = app.listen(process.env.PORT, function(){
    console.log('Listening to port', server.address().port);
})