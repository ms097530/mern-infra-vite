// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api'

// * We will use a src/utilities/users-services.js module to organize functions used to sign-up, log in, log out, etc.
// ? SignUpForm.jsx < --> users - service.js < --> users - api.js < -Internet -> server.js(Express)
// * ==========================================
// ? handleSubmit < --> [signUp]-users-service < --> [signUp]-users-api < -Internet -> server.js(Express)

// ! Currently, if user gets deleted or altered, JWT will store stale user data

// * Get JWT
export function getToken()
{
    // getItem returns null if there's no string
    const token = localStorage.getItem('token')
    if (!token) return null

    // ? calling on frontend, NOT with Node, so not deprecated
    // * use window object to remove deprecation message
    const payload = JSON.parse(window.atob(token.split('.')[1]))
    // console.log(payload)

    // if token is expired
    if (payload.exp < Date.now() / 1000)
    {
        localStorage.removeItem('token')
        return null
    }

    // token is valid
    return token
}

// * Get User
export function getUser()
{
    const token = getToken()

    // ? calling on frontend, NOT with Node, so not deprecated
    // * use window object to remove deprecation message
    return token ? JSON.parse(window.atob(token.split('.')[1])).user : null
}

// * Sign up user
export async function signUp(userData)
{
    console.log('users-service signUp')
    // Delegate the network request code to the users-api.js API 
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData)
    // saves token to localStorage
    localStorage.setItem('token', token)

    return getUser()
}

// * Logout user
export function logOut()
{
    localStorage.removeItem('token')
}

// * Login user
export async function login(credentials)
{
    console.log('users-service login')

    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)

    return getUser()
}

export async function checkToken()
{
    return usersAPI.checkToken()
        // expecting dateStr from server
        .then(dateStr =>
        {
            return new Date(dateStr)
        })
}