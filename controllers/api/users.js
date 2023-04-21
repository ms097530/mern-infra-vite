const User = require('../../models/User')
const jwt = require('jsonwebtoken')

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
        console.log(user);

        //* creating a new jwt
        const token = createJWT(user);

        res.json(token);

    } catch (error)
    {
        console.log(error);
        res.status(400).json(error)
    }
}

module.exports = {
    create
}