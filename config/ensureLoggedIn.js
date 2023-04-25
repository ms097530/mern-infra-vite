module.exports = function (req, res, next)
{
    // req.user is only set by 
    console.log(req.user)
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next();
}