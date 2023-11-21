const mongoose = require('mongoose');

const Post = require('./models/Post')

mongoose.connect('mongodb://localhost:27017/holyGround')
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((err) => {
        console.log('got error!');
        console.log(err);
    })

// const p = new Post({
//     title: "first blog post ever",
//     description: "This is the first blog post ever",
//     category: 'announcement'
// })

// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })


const seedPosts = [
    {
        title: 'Second Post',
        description: 'This is the second post ever from the website',
        category: 'announcement',
    },
    {
        title: 'What is conditional statement?',
        description: 'This is the post about teaching what is conditional statement. etc.',
        category: 'lesson',
    },
    {
        title: 'Tips on using VSCode settings',
        description: 'This is the tip for making VSCode easier for C++ template',
        category: 'tip',
    },
    {
        title: 'Tips on web development',
        description: 'This is the tip for starting to be a web developer',
        category: 'tip',
    },
]

Post.insertMany(seedPosts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })