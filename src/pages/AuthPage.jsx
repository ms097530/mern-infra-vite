import React from 'react'
import SignUpForm from '../components/SignUpForm'

export default function AuthPage({ setUser })
{
    return (
        <div>
            <SignUpForm setUser={setUser} />
        </div>
    )
}
