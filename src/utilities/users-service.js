// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api'

// * We will use a src/utilities/users-services.js module to organize functions used to sign-up, log in, log out, etc.
// ? SignUpForm.jsx < --> users - service.js < --> users - api.js < -Internet -> server.js(Express)
// * ==========================================
// ? handleSubmit < --> [signUp]-users-service < --> [signUp]-users-api < -Internet -> server.js(Express)

export const signUp = async (userData) =>
{
    console.log('users-service signUp')
    // Delegate the network request code to the users-api.js API 
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData)
    // saves token to localStorage
    localStorage.setItem('token', token)
    console.log('returning token')
    return token
}