/**
 * @author Victor Krenzel (102446176)
 * @desc WEB322 Assignment 2
 * @date 10/16/2022
 * @version 0.1
 */

const express = require('express')
const path = require('path')
const app = express()

// HTTP Port (default 8080)
const port = process.env.PORT || 8080

// *** Main - Root Route ***

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/blog.html'))
    console.log(`'/' Successfully loaded!`)
})

app.get("/readmore", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/read_more.html"));
})

// *** Registration Routes ***

app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/registration.html"))
})

app.post("/register-user", upload.single("photo"), (req, res) => {
    res.send("register");
})

router.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"));
})

// *** Error Handling ***

app.use((err, req, res, next) => {
    res.status(404).send("Error 404: Page Not Found");
})

// *** Listener ***

// setup http server to listen on port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})