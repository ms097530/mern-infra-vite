function create(req, res)
{
    console.log('[From POST handler')
    console.log(req.body)
    res.send(req.body)
}

module.exports = {
    create
}