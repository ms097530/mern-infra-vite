// * The users-service.js module will need to make AJAX requests to the Express server

const BASE_URL = '/api/users'

export async function signUp(userData)
{
    console.log('users-api signUp')
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    const res = await fetch(BASE_URL,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // Fetch requires data payloads to be stringified
            // and assigned to a body property on the options object
            body: JSON.stringify(userData)
        })

    // Check if request was successful
    // ! fetch method will not raise an error unless there's a network failure... so we need to check res.ok property to see if we got a successful response
    if (res.ok)
    {
        // res.json() will resolve to the JWT
        console.log('res is okay')
        return res.json()
    }
    else
    {
        console.log('got an error in users-api')
        throw new Error('Invalid Sign Up')
    }
}