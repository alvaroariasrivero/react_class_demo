import React, { useState } from 'react';

const Donate = () => {
  const [count, setCount] = useState(0);
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables
    // estado se llama count
    //setCount equivale a setState, solo que caount es personalizable
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    setValues({
      email,
      password
    })
  }

  const handleAddClick = () => {
      setCount(count + 1)
  }

  const handleSubClick = () => {
    if(count > 0){
      setCount(count - 1)
    }else{
      alert('No puedes quitarme cervezas!!!')
    }
  }

  return (
    <>
      <h2>Dóname una cerveza</h2>
      <button name='add' onClick={handleAddClick} >+</button>
      <button name='sub' onClick={handleSubClick} >-</button>

      <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text"></input>
          <br/><br/>
          <label htmlFor="password">Password</label>
          <input name="password" type="text"></input>
          <button>Enviar</button>
          {values.email && values.password ? <h1>Cervezas donadas: {count} por {values.email}</h1>:''}
      </form>
    </>
  );
};

export default Donate;
