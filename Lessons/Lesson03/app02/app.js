const express = require('express');
const path = require('path');
require('./api/data/db');
require('./api/data/dbconnection').open();
const routes = require("./api/routes");
const conn = require('./api/data/dbconnection');
conn.open();

const app = express();

app.set('port', 3000);
app.use(function(req, res, next){
    console.log(req.url);
    next();
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}))
app.use('/api/', routes)

const server = app.listen(app.get('port'), function(){
    console.log("Listening to port ", server.address().port);
});