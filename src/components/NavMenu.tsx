import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = ({user,setLogin}:{user:any,setLogin:Function}) => {
    let links;

    const logout = async() => {
        await axios.post('logout',{})
        setLogin()
    }

    if(user){
        links = (
            <li>
                <Link to="/" onClick={logout}>Logout</Link>
            </li>
        )
    }else{
        links = (
            <>
            <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
            </>
        )
    }
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                {links}
            </ul>
        </>
    )
}

export default NavMenu
