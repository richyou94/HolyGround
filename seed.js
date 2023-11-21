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


