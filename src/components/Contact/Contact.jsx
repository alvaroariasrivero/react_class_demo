import React, { Component } from "react";
import {userContext} from '../../context/userContext';

class Contact extends Component {
  static contextType = userContext //Adhiere el contexto deseado a la clase, es como las etiquetas HTML que envuelven al consumer
  
  constructor(props) {
    super(props)
  
    this.name = React.createRef(); //Crear la referencia

    this.state = {
       name: ""
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    // console.log("*****************PROPS***********************************")
    // console.log("Esto es prevProps", prevProps, "Esto es props", this.props)
    // console.log("Esto es prevState", prevState, "Esto es state", this.state)
    
  }
  
  handleSubmit = (event) =>{
    event.preventDefault();
    const name = event.target.elements.name.value
    // console.log("Esto es nombre:", name)
    this.setState({name})

    const{login} = this.context; //Consumir el contexto, .context es una propiedad reservada
    login(name) //Invoco la función, enviada por el provider(Header y Main)
  }
  
  render() {
    return  <div>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Nombre:</label><br/>
                  <input type="text" id="name" name="name" ref={this.name}/><br />
                  <input type="submit" value="Login"/>
            </form>
          </div>
  }
}

export default Contact;
