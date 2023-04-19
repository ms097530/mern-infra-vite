import { useState } from 'react'

export default function SignUpForm()
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    const handleSubmit = () => { }
    const handleChange = () => { }

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
