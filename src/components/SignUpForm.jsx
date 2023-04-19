import { useState } from 'react'

export default function SignUpForm()
{
    // state for controlling inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const handleSubmit = (e) => 
    {
        // prevents page from refreshing - control what happens when form is submitted
        // ! refreshing would cause loss of state - want to avoid in SPA
        e.preventDefault()
        console.log('SUBMITTING')
        console.log(formData)
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
                <form autoComplete='off' onSubmit={handleSubmit} >
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange} />
                    <label htmlFor="password">Password</label>

                    <input type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange} />
                    <label htmlFor="confirm">Confirm</label>
                    <input type="password"
                        name="confirm"
                        id="confirm"
                        value={formData.confirm}
                        onChange={handleChange} />

                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className='error-message'>&nbsp; {formData.error}</p>
        </div>
    )
}
