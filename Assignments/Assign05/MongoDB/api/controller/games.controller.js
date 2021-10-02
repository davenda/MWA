const dbconnection = require('../data/dbconnection');

const getGames = function(req, res){
    console.log('Get Games Get Request');
    const collection = dbconnection.get().collection('games');
    collection.find().toArray(function(err, games) {
        if (err) {
            console.log('Error Occured in retrieving data');
            res.status(200).json('Error Occured in retrieving data from the database.')
        } else {
            res.status(200).json(games);                    
        }
    });
}

const addGame = function(req, res){
    console.log('Add Games POST Request');
    res.status(200).json('Add Games Request');
}

module.exports = {
    getGames: getGames,
    addGames: addGame
}