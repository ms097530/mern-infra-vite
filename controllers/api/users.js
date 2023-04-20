function create(req, res)
{
    console.log('[From POST handler')
    console.log(req.body)

    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
    // only interested in the payload (claims)
    const payload = jwt.split('.')[1]
    // * Node atob deprecated - use Buffer.from(data, 'base64')
    // ? use below string conversion methods to get appropriate data
    // * Node btoa deprecated - use buf.toString('base64')
    // console.log(atob(payload))
    const buf = Buffer.from(payload, 'base64')
    console.log(buf.toString('base64'))  // eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
    console.log(buf.toString())  // {"sub":"1234567890","name":"John Doe","admin":true}

    res.json({
        user:
        {
            name: req.body.name,
            email: req.body.email
        }
    })
}

module.exports = {
    create
}