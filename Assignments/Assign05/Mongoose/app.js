const express = require('express');
const route = require('./api/route');
const path = require('path');

const app = express();
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use('/api/', route);

const server = app.listen(app.get('port'), function() {
    console.log('Listening to port ', server.address().port);
})