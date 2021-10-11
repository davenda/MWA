require('dotenv').config({'path': '.env'});
const express = require('express');
const route = require('./api/route');
const path = require('path');

const app = express();
if(isNaN(process.env.PORT)){
    process.env.PORT = 3000;
}

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', route);
app.use(function(req, res, next){
    console.log(req.method, req.ulr);
    next()
});
const server = app.listen(process.env.PORT, function(){
    console.log('Listening to port ', server.address().port);
});
