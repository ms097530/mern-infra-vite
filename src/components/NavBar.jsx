import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ user })
{
    return (
        <nav>
            <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'>New Order</Link>
            <span>
                &nbsp; Welcome, {user}
            </span>
        </nav>
    )
}
