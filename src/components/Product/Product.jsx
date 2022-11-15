import React, { Component } from 'react'
import './Product.css'

export class Product extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             supplier: this.props.info.supplier || "Desayunos Lorenzo S.A." 
        }
    }
    
    render() {
        const{name, price, picture} = this.props.info

        return (
            <div>
                <p>Producto: {name}......................Precio: {price}€ Proveedor: {this.state.supplier}</p>
                <figure>
                    <img src={picture} alt={name} className='picture'/>
                    <figcaption>{name} - {price}€</figcaption>
                </figure>
            <button onClick={this.props.delete}>Borrar Producto</button>
            </div>
        )
    }
}

export default Product
