const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: { type: String, index: true },
    type: String,
    identifier: String
})

const Post = mongoose.model('Level', postSchema);
module.exports = Post;
