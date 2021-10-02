const express = require('express');
const path = require('path');
const route = require('./api/route');
require('./api/data/dbconnection').open();

const app = express();

app.set('port', 3000);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);

const server = app.listen(app.get('port'), function(){
    console.log('Listening on port ', server.address().port);
})