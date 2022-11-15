import React, { Component } from "react";
import PokemonsApi from "../PokemonsApi/PokemonsApi";
import axios from "axios";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: [] }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
  }
  async componentDidMount(){
    //Petición HTTP
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(resp => resp.json())
    //     .then(data => data)
    // await new Promise( resolve => setTimeout(resolve, 3000)); // Simular retardo de una carga más lenta
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.data;
    this.setState({
        pokeLista: data.results
    })
    console.log('componentDidMount');
  }
  render() {
    console.log('RENDER')
    return (
        <PokemonsApi lista={this.state.pokeLista}></PokemonsApi>
    );
}
}

export default Staff;
