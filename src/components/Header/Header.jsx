import React, { Component, Fragment } from 'react'
import Nav from '../Nav/Nav'

import {userContext} from '../../context/userContext';

class Header extends Component {
    render() {
        return (
            <header>
                <Nav/>
                <userContext.Consumer>
                    {
                    ({user, logout}) => user.name ?
                                        <Fragment>
                                            <h3>Hola {user.name}</h3>
                                            <button onClick={logout}>Logout</button>
                                        </Fragment>
                                        : ('') //Condicional ternario, si no hay user desaparece el Fragment

                    
                    // value => <h3>Hola {value.user.name}</h3> //La primera es destructuring
                    }
                </userContext.Consumer>
            </header>
        )
    }
}

export default Header
