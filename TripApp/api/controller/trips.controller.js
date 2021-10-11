require('../data/db');
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');
const validator = mongoose.Types.ObjectId.isValid;

const _responder = function (res, err, data) {
    console.log('_responder called');
    if (err) {
        console.log(err);
        res.status(500)
            .json(err.message);
    }
    else if (!data) {
        console.log('Trip Not Found');
        res.status(404)
            .json('Trip Not Found');
    }
    else {
        console.log(data)
        res.status(200)
            .json(data);
    }
}

module.exports.getTrips = function(req, res){
    console.log('Get All Trips Called');
    let count;
    let offset;
    if(!req.query.count || !req.query.offset){
        offset = 0;
        count = 5;
    }
    else if(isNaN(req.query.offset) || isNaN(req.query.count)){
        res.status(400).json('Offset and Count should be valid numbers')
        return;
    }
    else if(parseInt(req.query.offset) < 0 || parseInt(req.query.count) < 0){
        res.status(400).json('Offset and Count should be positive numbers');
        return;
    }
    else{
        offset = parseInt(req.query.offset);
        count = parseInt(req.query.count);
    }
    Trip.find()
        .limit(count)
        .skip(offset)
        .exec((err, data) => _responder(res, err, data));
}

module.exports.getOneTrip = function(req, res){
    console.log("Get One Trip Called");
    const tripId = req.params.tripId;
    if (!validator(tripId)) {
        res.status(400)
            .json('Invalid Trip Id');
        return;
    }
    Trip.findById(tripId)
        .exec((err, data) => _responder(res, err, data));
}

module.exports.addTrip = function (req, res) {
    console.log('Add Trip Called');
    console.log(req.body);
    const tripData = new Trip(req.body);
    console.log(tripData);
    Trip.create(tripData, (err, data) => _responder(res, err, data))
}

module.exports.modifyTrip = function (req, res) {
    console.log('Modify Trip Called');
    const tripId = req.params.tripId;
    const newData = req.query;
    if (!validator(tripId)) {
        res.status(400)
            .json('Invalid Trip Id');
        return;
    }
    Trip.findById(tripId)
        .exec(function (err, response) {
            if (err) {
                console.log(err);
                res.status(500)
                    .json(err.message);
            }
            else if (!response) {
                console.log('Trip Not Found');
                res.status(404)
                    .json('Trip Not Found')
            }
            else {
                Object.keys(newData).forEach(function (key) {
                    response[key] = newData[key];
                })
                response.save((err, updatedData) => _responder(res, err, updatedData))
            }
        })
}

module.exports.deleteTrip = function (req, res) {
    console.log('Delete Trip Called');
    const tripId = req.params.tripId;
    if (!validator(tripId)) {
        res.status(400)
            .json('Invalid Trip Id');
        return;
    }
    Trip.findByIdAndDelete(tripId)
        .exec((err, data) => _responder(res, err, data));
}