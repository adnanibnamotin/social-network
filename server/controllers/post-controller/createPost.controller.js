const Post = require('../../models/post');

module.exports = async (req, res) => {
    try {
        req.body.postedBy = req.auth.id;
        const newPost = await new Post(req.body);
        await newPost.save();
        res.send(newPost);
    } catch (err) {
        res.send(err.message);
    }
}