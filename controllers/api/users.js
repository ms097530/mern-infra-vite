const User = require('../../models/User')
const jwt = require('jsonwebtoken')

async function create(req, res)
{
    console.log('[From POST handler')
    console.log(req.body)

    try
    {
        const user = await User.create(req.body)
        console.log(user)

        // * creating a new jwt
        jwt.sign({ user }, process.env.SECRET, process.env.SECRET, { expiresIn: '24h' })
    }
    catch (err)
    {
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports = {
    create
}