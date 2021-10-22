const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require("jsonwebtoken");

module.exports.register = function(req, res){
    console.log('User Registration Called');
    console.log(req.query);
    req.query.password = bcrypt.hashSync(req.query.password, bcrypt.genSaltSync(10));
    const newUser = new User(req.query);
    User.create(newUser, function(err, response){
        if(err){
            res.status(400).json(err);
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
            res.status(400).json(err);
        }
        else if(user){
            console.log(req.query.password, user.password)
            if(bcrypt.compareSync(req.query.password, user.password)){
                console.log('user found');
                const token = jwt.sign({ username: user.username }, "cs572", { expiresIn: 3600 });
                res.status(200).json({ success: true, token: token });
            }
            else{
                console.log("Unauthorized");
                res.status(401).json('Unauthorized');
            }
        }
        else{
            console.log('User Not Fount');
            res.status(400).json('User Not Found');
        }
    })
}


module.exports.authenticate = function (req, res, next) {
    const headerExists = req.headers.authorization;
    if (headerExists) {
        const token = headerExists.split(" ")[1];
        jwt.verify(token, "cs572", function (err, decoded) {
            if (err) {
                console.log(err); res.status(401).json("Unauthorized");
            } else {
                req.user = decoded.username;
                next();
            }
        });
    } else { 
        res.status(403).json("No token provided"); 
    }
};