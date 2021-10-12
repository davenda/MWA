require('dotenv').config({'path': '.env'});
const express = require('express');
const route = require('./api/route');
const path = require('path');

const app = express();
if(isNaN(process.env.PORT)){
    process.env.PORT = 3000;
}
app.use(function(req, res, next){
    console.log(req.method, req.ulr);
    next()
});
app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', route);


const server = app.listen(process.env.PORT, function(){
    console.log('Listening to port ', server.address().port);
});
// a = { 'A' : 1, 'B': 2 };


// delete a.A;
// //For testing:
// console.log( a );