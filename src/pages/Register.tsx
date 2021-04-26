import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'

const Register = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')

    const submit = async(e: SyntheticEvent) => {
        e.preventDefault();

        const response = await axios.post(`http://localhost:8000/api/register`,{
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: passwordConfirm
        });

        console.log(response);
    }
    return (
        <form onSubmit={submit}>
            <input type="text" name="first_name" required onChange={e => setFirstName(e.target.value)}/>
            <input type="text" name="last_name" required onChange={e => setLastName(e.target.value)}/>
            <input type="email" name="email" required onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" required onChange={e => setPassword(e.target.value)}/>
            <input type="password" name="password_confirm" required onChange={e => setPasswordConfirm(e.target.value)}/>


            <button type="submit">Login</button>
        </form>
    )
}

export default Register
