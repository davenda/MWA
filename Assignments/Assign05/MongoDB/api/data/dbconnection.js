const MongoClient = require('mongodb').MongoClient;

const dbName = 'newTTestDB';
const dbUrl = 'mongodb://127.0.0.1:27017/' + dbName;

let _connection = null;

const open = function(){
    MongoClient.connect(dbUrl, function(err, client) {
        if (err) {
            console.log(err);
        } else {
            _connection = client.db(dbName);
            console.log('Connection to the server established.');
        }
    })
}

const get = function() {
    return _connection;
}

module.exports = {
    get: get,
    open: open
}