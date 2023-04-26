import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import Logo from '../../components/Logo/Logo'

import styles from './AuthPage.module.css'

export default function AuthPage({ setUser })
{
    const [showLogin, setShowLogin] = useState(true)

    const toggleLogin = () =>
    {
        setShowLogin(prevShowVal => !prevShowVal)
    }

    return (
        <main className={styles.AuthPage}>

            <div>
                <Logo />
                <h3 onClick={toggleLogin}>
                    {!showLogin ? 'Login' : 'Sign Up'}
                </h3>
            </div>

            {
                !showLogin && <SignUpForm setUser={setUser} />
            }
            {
                showLogin && <LoginForm setUser={setUser} />
            }
        </main>
    )
}
