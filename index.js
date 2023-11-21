const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/blogs', async (req, res) => {
    const posts = await Post.find({})
    // console.log(posts)
    res.render('blogs/index');
})

app.listen(3000, () => {
    console.log("APP is listening on PORT 3000!")
})