const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()
const port = process.env.PORT || 8080

// Import Modules
const registerRouter = require("./routes/register")

// Routers
app.use('/register', registerRouter)

// setup the static folder that static resources can load from
// we need this so that the photo can be loaded from the server
// by the browser after sending it
app.use(express.static("./public/"));

// setup a 'route' to listen on the default url path (http://localhost)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/blog.html'))
    console.log(`'/' Successfully loaded!`)
})

// now add a route that we can POST the form data to
// IE: http://localhost/register-user
// add the middleware function (upload.single("photo")) for multer to process the file upload in the form
// the string you pass the single() function is the value of the
// 'name' attribute on the form for the file input element


// setup another route to listen on /readmore
app.get("/readmore", function(req,res){
    res.sendFile(path.join(__dirname,"./views/read_more.html"));
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(404).send("Error 404: Page Not Found");
});

// setup http server to listen on port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})