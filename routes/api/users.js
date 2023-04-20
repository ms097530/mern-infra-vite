const express = require('express')
const router = express.Router()
// const usersCtrl = require('../../controllers/users')

router.post('/', (req, res) =>
{
    console.log(req.body)
    res.send(req.body)
})

module.exports = router