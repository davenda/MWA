const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.set('port', 3000);
const server = app.listen(app.get('port'), function(){
    console.log('Listening to port ' + server.address().port);
})