import React from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

export default function AuthPage({ setUser })
{
    return (
        <div>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </div>
    )
}
