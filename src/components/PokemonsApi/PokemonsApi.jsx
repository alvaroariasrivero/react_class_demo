import React, { Fragment } from 'react';

const PokemonsApi = ({ lista }) => {
    return (
        <div>
            {
                lista.map(pokemon => 
                        <Fragment key={pokemon.name} >
                            <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                            <p>{pokemon.url}</p>
                        </Fragment>
                )
            }
        </div>
    );
}

PokemonsApi.defaultProps = {
    lista: []
  }

export default PokemonsApi;