import axios from 'axios';
import React from 'react'

const Home = ({user}:{user:any}) => {
    let message;

    if(user){
        message = `Hi ${user.first_name} ${user.last_name}`
    }else{
        message = `Not Login`;
    }

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Home
