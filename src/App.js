import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/';
import Header from './components/Header/';
import Main from './components/Main/';

import {BrowserRouter} from 'react-router-dom';
import {userContext} from './context/userContext';

function App() {
  
  const [user, setUser] = useState({name:''}); //Hook para dar state y setState a funciones
  
  const login = (name) => {
    setUser({name}) //Cambia el estado por un nuevo nombre
  }

  const logout = () => {
    setUser({name:''}) //Limpia estado user
  }

  const value = {
    user,
    login,
    logout
  } //Claves: user, login y logout

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={value}>
        <Header/>
        <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
