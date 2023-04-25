const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')

// * POST
router.post('/', usersCtrl.create)
router.post('/login', usersCtrl.login)

// * GET
router.get('/check-token', usersCtrl.checkToken)

module.exports = router