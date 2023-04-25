const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//* /*-- Helper Functions --*/
function createJWT(user)
{
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
}

async function create(req, res)
{
    try
    {
        //* creating a new user
        const user = await User.create(req.body);
        console.log('USER in create:', user);

        //* creating a new jwt
        const token = createJWT(user);

        res.json(token);

    }
    catch (error)
    {
        console.log(error);
        res.status(400).json(error)
    }
}

async function login(req, res)
{
    // * EXPECTS: body with email to find user with
    try
    {
        const LOGIN_ERROR_MSG = 'Email or password did not match'

        console.log('LOGGING IN')
        console.log(req.body)
        const user = await User.findOne({ email: req.body.email })
        console.log('USER in login:', user)

        // email does not match any user
        if (!user)
        {
            throw new Error(LOGIN_ERROR_MSG)
        }

        const doPasswordsMatch = await bcrypt.compare(req.body.password, user.password)

        // found user's password does not match provided password
        if (!doPasswordsMatch)
        {
            throw new Error(LOGIN_ERROR_MSG)
        }

        // checks passed - create and return token
        const token = createJWT(user)

        res.json(token)
    }
    catch (error)
    {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    create,
    login
}