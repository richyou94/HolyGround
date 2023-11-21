const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['announcement', 'lesson', 'ti p']
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;