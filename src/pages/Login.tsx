import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router'

const Login = ({setLogin}:{setLogin: Function}) => {
    const [ email,setEmail ] = useState('')
    const [password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('login',{
            email,password
        });

        setRedirect(true);
        // setLogin(null);
    }

    if(redirect){
        return <Redirect to="/" />
    }

    return (
        <form onSubmit={submit}>
            <input type="email" name="email" required onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" required onChange={e => setPassword(e.target.value)}/>

            <button type="submit">Login</button>
        </form>
    )
}

export default Login
