const express = require('express');
const path = require('path');
const routes = require("./api/routes");

const app = express();

app.set('port', 3000);
app.use(function(req, res, next){
    console.log("Recieved request");
    next();
})
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

const server = app.listen(app.get('port'), function(){
    console.log("Listening to port ", server.address().port);
});