require('../data/db');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = function(req, res){
    console.log('User Registration Called');
    console.log(req.query);
    req.query.password = bcrypt.hashSync(req.query.password, bcrypt.genSaltSync(10));
    const newUser = new User(req.query);
    User.create(newUser, function(err, response){
        if(err){
            res.status(500).json(err);
        }
        else{
            res.status(201).json(response);
        }
    })
}
module.exports.login = function(req, res){
    console.log('User Login Called');
    console.log(req.query)
    User.findOne({username:req.query.username}).exec(function(err, user){
        if(err){
            console.log(err)
            res.status(500).json(err);
        }
        else if(user){
            console.log(req.query.password, user.password)
            if(bcrypt.compareSync(req.query.password, user.password)){
                console.log('user found');
                res.status(200).json(user);
            }
            else{
                res.status(401).json('Unauthorized');
            }
        }
        else{
            console.log('User Not Fount');
            res.status(400).json('User Not Found');
        }
    })
}