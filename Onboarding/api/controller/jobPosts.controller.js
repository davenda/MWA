require('../data/db');
const mongoose = require('mongoose');
const validator = mongoose.Types.ObjectId.isValid;
const Post = mongoose.model('JobPost');
const Location = mongoose.model('Location');

module.exports.getPosts = function (req, res) {
    console.log('Get Post Called');
    console.log(req.query);
    let offset;
    let count;
    // if(req.query.offset && req.query.count){
    //     offset = 0;
    //     count = 5;
    // }
    // if(isNaN(req.query.offset) && isNaN(req.query.count)){
    //     res.status(400).json('Offset and Count should be valid numbers')
    //     return;
    // }
    // else if(parseInt(req.query.offset) < 0 || parseInt(req.query.count) < 0){
    //     res.status(400).json('Offset and Count should be positive numbers');
    //     return;
    // }
    // else{
    offset = parseInt(req.query.offset);
    count = parseInt(req.query.count);
    // }
    console.log(offset, count);
    // Post.find().limit(count).skip(offset).exec(function(err, posts){
    //     if(err){
    //         console.log(err)
    //         res.status(500).json(err.message);
    //     }
    //     else if(!posts){
    //         res.status(404).json('Post not found');
    //     }
    //     else{
    //         res.status(200).json(posts);
    //     }
    // })
    const nowTime = new Date().getTime();
    const sixMonthAgo = new Date(nowTime - 180 * 24 * 60 * 60 * 1000)
    console.log((new Date().getDay));
    const filter = {
        postDate: {
            $gte: sixMonthAgo
        }
    }
    Post.find()
        .limit(count)
        .skip(offset)
        .exec((err, response) => _checking(res, err, response))
}

module.exports.addPost = function (req, res) {
    console.log('Add Post Called');
    console.log(req.body);
    const postData = new Post(req.body);
    console.log(postData);
    const locationData = new Location({
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        street: req.body.street,
        zip: req.body.zip
    });
    console.log(locationData);
    postData.location = locationData;
    console.log(postData);
    Post.create(postData, (err, response) => _checking(res, err, response))
    // {
    //     if(err){
    //         console.log(err)
    //         res.status(500).json(err.message);
    //     }
    //     else{
    //         res.status(200).json(data);
    //     }
    // })
}

module.exports.getOnePost = function (req, res) {
    console.log("Get One Post Called");
    const postId = req.params.postId;
    if (!validator(postId)) {
        res.status(400)
            .json('Invalid Post Id');
        return;
    }
    Post.findById(req.params.postId)
        .exec((err, response) => _checking(res, err, response));
}

module.exports.modifyPost = function (req, res) {
    console.log('Modify Post Called');
    const postId = req.params.postId;
    const newData = req.query;
    if (!validator(postId)) {
        res.status(400)
            .json('Invalid Post Id');
        return;
    }
    Post.findById(postId)
        .exec(function (err, response) {
            if (err) {
                console.log(err);
                res.status(500)
                    .json(err.message);
            }
            else if (!response) {
                console.log('Post Not Found');
                res.status(404)
                    .json('Post Not Found')
            }
            else {
                Object.keys(newData).forEach(function (key) {
                    response[key] = newData[key];
                })
                response.save((err, updatedData) => _checking(res, err, updatedData))
            }
        })
}

module.exports.deletePost = function (req, res) {
    console.log('Delete Post Called');
    const postId = req.params.postId;
    if (!validator(postId)) {
        res.status(400)
            .json('Invalid Post Id');
        return;
    }
    Post.findByIdAndDelete(postId)
        .exec((err, response) => _checking(res, err, response));
}
const _checking = function (res, err, post) {
    if (err) {
        console.log(err);
        res.status(500)
            .json(err.message);
    }
    else if (!post) {
        console.log('Post Not Found');
        res.status(404)
            .json('Post Not Found');
    }
    else {
        res.status(200)
            .json(post);
    }
}
// function complete(res, post){
//     console.log(post)
//     if(!post){
//         console.log('Post Not Found');
//         res.status(404)
//             .json('Post Not Found');
//     }
//     else{
//         res.status(200)
//             .json(post);
//     }
// }
// function failed(err){
//     console.log(err);
//     queryResponse.status(500)
//         .json(err.message);
// }


