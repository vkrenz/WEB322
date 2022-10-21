/**
 * @author Victor Krenzel (102446176)
 * @desc WEB322 Assignment 2
 * @date 10/20/2022
 * @version 1.3
 */

const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()

app.use(express.static('public'))

// HTTP Port (default 8080)
const port = process.env.PORT || 8080

// *** Multer Setup ***

const storage = multer.diskStorage({
    destination: "./public/photos",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(path.originalname))
    }
})

const upload = multer({ storage: storage })

// *** Main - Root Route ***

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
    console.log(`'/' Successfully loaded!`)
})

app.get("/read_more", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/read_more.html"));
})

// *** Blog Route ***

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname,"./views/blog.html"))
})

// *** Registration Routes ***

app.get("/registration", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/registration.html"))
})

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"./views/login.html"));
})

// *** Error Handling (Middleware) ***

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Error: Something broke.')
})

// *** Error Logger Fsunc ***

// Generic Error Logger Function 
const logErr = (err, req, res, next) => {
    console.log(err.stack)
    next(err)
}

// *** Listener ***

// setup http server to listen on port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})