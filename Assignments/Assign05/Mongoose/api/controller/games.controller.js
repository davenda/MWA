const express = require('express');

const getGames = function(req, res) {
    console.log('Get all games request');
    res.status(200).json('GET all games request');
};

module.exports = {
    getGames: getGames
}