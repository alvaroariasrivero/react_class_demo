import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Pokeuser = () => {

  const [pokemons, setPokemons] = useState([]);

  //Emula a un componentDidMount pasándole el array vacío al final
  useEffect(() => {
    const getPokemons = async () =>{
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(resp.data.results); //Lo guarda en el estado
    }
    getPokemons();
  }, []);

  return(
      <ul>
        {pokemons.map((pokemon)=><li>Nombre: {pokemon.name}</li>)}
      </ul>)
};

export default Pokeuser;
