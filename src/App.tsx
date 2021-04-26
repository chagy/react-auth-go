import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import NavMenu from './components/NavMenu';
import axios from 'axios';

function App() {
  const [user,setUser] = useState(null);
  const [login,setLogin] = useState(false);

  useEffect(() => {
    (
        async() => {
            try {
                const response = await axios.get('user')
                const user = response.data;

                setUser(user)
            }catch(e){
              setUser(null)
            }
        }
    )();
}, [login])

  return (
    <div className="App">
        
        <BrowserRouter>
          <NavMenu user={user} setLogin={() => setLogin(false)}/>
          <br/>
          <Route exact path="/" component={() => <Home user={user} />}/>
          <Route exact path="/login" component={() => <Login setLogin={() => setLogin(true)}/>} />
          <Route exact path="/register" component={Register}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
