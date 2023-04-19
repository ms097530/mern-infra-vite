const mongoose = require('mongoose')

// Connect to db here, rather than exporting a function to run in listening function
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)


const db = mongoose.connection

db.on('connected', () =>
{
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})