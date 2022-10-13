const express = require('express')
const path = require('path')
const multer = require('multer')
const router = express.Router()

// setup another route to listen on /register
router.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"./views/registration.html"))
})

router.post("/register-user", upload.single("photo"), (req, res) => {
    res.send("register");
});

// setup another route to listen on /login
router.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"./views/login.html"));
});

module.exports = router

