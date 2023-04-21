import React from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../utilities/users-service'

export default function NavBar({ user, setUser })
{
    const handleLogout = () =>
    {
        setUser(null)
    }

    return (
        <nav>
            <Link to='/orders'>Order History</Link>
            &nbsp; | &nbsp;
            <Link to='/orders/new'>New Order</Link>
            <span>
                &nbsp; Welcome, {user.name}
            </span>
            &nbsp;
            <Link to="" onClick={handleLogout}>
                Logout
            </Link>
        </nav>
    )
}
