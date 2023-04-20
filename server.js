// Initial configuration
require('dotenv').config()  // env variables
require('./config/db')  // connect to db
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const userRoutes = require('./routes/api/users')

// development port: 4000
// in production, we'll have a PORT number set via environment variables
const PORT = process.env.PORT || 4000
const app = express()

// * Config
// Logger middleware
app.use(logger('dev'))
// JSON payload middleware (for data coming from frontend functions)
app.use(express.json())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'dist')))

// Put API routes here, before the "catch all" route
app.use('/api/users', userRoutes)

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
// ? since this is based on what is in the "build" folder, it will only be updated after running build command
// * will catch:
// * A user types a path into the address bar and presses enter.
// * The user refreshes the browser.
// * An "external" link in an email, included on another web page, etc.to the MERN - Stack app is clicked.
app.get('*', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})


app.listen(PORT, () =>
{
    console.log(`Listening on port: ${PORT}`)
})