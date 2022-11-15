import React, { Component } from 'react'
import Product from '../Product/'
import data from '../../data'

export class Products extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             lastAdded: {}, //{name:"tostada", price:"1,5"} Modifica el estado
             productList: data //[{}, {}, {}]   Guarda los productos nuevos
            }
    }
    

    createProduct = (name,price,supplier, picture) => {
        // console.log('******************************************');
        //const name = "naranja"
        //const price = "1"
        //const name = prompt("Introduce producto")
        //const price = prompt("introduce precio")
        const newProduct = {name, price, supplier, picture}
        this.setState({ lastAdded: newProduct }) // Modifica el estado. Ultimo añadido
        this.setState({ productList: [...this.state.productList, newProduct] })
        //alert(`Producto ${name}, precio: ${price} € Creado`)
    }

    paintProducts = () =>{
        // lee de state productList OK
        // Los recorre con un bucle ->Transformar datos de array a componente Product--> MAP
        // Los pinta en el DOM
        // {} ---> <Product>
        //[{},{},{},{}] ---> [<Product>,<Product>,<Product>,<Product>,<Product>]
        // Devuelve [<Product>,<Product>,<Product>,<Product>,<Product>]
        return this.state.productList.map((product,i)=> <Product info={product} delete={()=>this.deleteProduct(i)} key={i}/>)
    }

    deleteAllProducts = () => {this.setState({productList: []})}

    deleteProduct = (i) => {
        const products = this.state.productList.filter((product,j)=>j!==i)
        this.setState({productList:products})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const supplier = event.target.elements.supplier.value
        const picture = event.target.elements.picture.value
        // Crear producto
        this.createProduct(name,price,supplier, picture)
    }

    render() {

        const name = this.state.lastAdded.name

        return (
            <div>
                {/* <Product info={data[0]}/>
                <Product info={data[1]}/>
                <Product info={data[2]}/>
                <Product info={data[3]}/> */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Nombre:</label><br/>
                    <input type="text" name="name"/><br />
                    <label htmlFor="price">Precio:</label><br/>
                    <input type="text" name="price"/><br/>
                    <label htmlFor="supplier">Proveedor:</label><br/>
                    <input type="text" name="supplier"/><br />
                    <label htmlFor="picture">Imagen:</label><br />
                    <input type="url" name="picture"/><br />
                    <input type="submit"/>
                </form>
                {this.paintProducts()}

                <button onClick={this.createProduct}>Crear</button>
                <button onClick={this.deleteAllProducts}>Borrar todo</button>
                <h5>Último producto creado: {name}</h5>
            </div>
        )
    }
}

export default Products
