import { useState } from 'react'
import { signUp } from '../utilities/users-service'

export default function SignUpForm({ setUser })
{
    // state for controlling inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const handleSubmit = async (e) => 
    {
        // prevents page from refreshing - control what happens when form is submitted
        // ! refreshing would cause loss of state - want to avoid in SPA
        e.preventDefault()

        try
        {
            console.log('SUBMITTING')
            console.log(formData)
            // necessary information for backend
            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            }
            // returns a token with the user info
            const user = await signUp(userData)
            console.log(user)

            setUser(user)
        }
        catch (err)
        {
            console.log(err)
            setFormData(prevData => ({ ...prevData, error: 'Sign up failed - try again' }))
        }
    }

    const handleChange = (e) =>
    {
        setFormData(prevData =>
        {
            // keep previous data and use name of field that event is firing from to target matching data property
            // typed value is then applied to matching data property
            return { ...prevData, [e.target.name]: e.target.value, error: '' }
        })
    }

    // * boolean to make sure password and confirmation input match
    // * disable submit button if they don't match
    const disable = formData.password !== formData.confirm

    return (
        <div>
            <div className='form-container'>
                <form autoComplete='off' onSubmit={handleSubmit}>

                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required />
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />

                    {/* Password-related inputs */}
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required />
                    <label htmlFor="confirm">Confirm</label>
                    <input type="password"
                        name="confirm"
                        id="confirm"
                        value={formData.confirm}
                        onChange={handleChange}
                        required />

                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className='error-message'>&nbsp; {formData.error}</p>
        </div>
    )
}
