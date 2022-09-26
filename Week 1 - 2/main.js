const exp = require('express');
const app = exp();

const path = require('path');


app.get('/', function (req, res) {
    // console.log("Hello World!");
    // res.send("Hello World!");
    // console.log(__dirname())
    res.sendFile(path.join(__dirname, './html/index.html'))
});