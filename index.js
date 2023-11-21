const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

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

    app.get('/blog', (req, res) => {
        res.send('blog site')
    })

    app.listen(3000, () => {
        console.log("APP is listening on PORT 3000!")
    })