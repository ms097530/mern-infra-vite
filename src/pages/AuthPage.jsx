import { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

export default function AuthPage({ setUser })
{
    const [showLogin, setShowLogin] = useState(true)

    const toggleLogin = () =>
    {
        setShowLogin(prevShowVal => !prevShowVal)
    }

    return (
        <main className="AuthPage">
            <h3 onClick={toggleLogin}>
                {!showLogin ? 'Login' : 'Sign Up'}
            </h3>

            {
                !showLogin && <SignUpForm setUser={setUser} />
            }
            {
                showLogin && <LoginForm setUser={setUser} />
            }
        </main>
    )
}
