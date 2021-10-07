const express = require('express');
const route = require('./api/route');
const path = require('path');

const app = express();
app.set('port', 3000);

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', route);
app.use(function(req, res, next){
    console.log(req.method, req.ulrx);
    next()
})
const server = app.listen(app.get('port'), function(){
    console.log('Listening to port ', server.address().port);
})