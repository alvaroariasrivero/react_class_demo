import React, { Component } from 'react';
import Products from '../Products/';
import About from '../About/About';
import Staff from '../Staff/Staff';
import Contact from '../Contact/Contact';
import Donate from '../Donate/Donate';
import Pokeuser from '../Pokeuser/Pokeuser';
import Topics from '../Topics/Topics';
import {Routes, Route} from 'react-router-dom';

export class Main extends Component {
    render() {
        return (
            <main>
                <Routes>
                    <Route path="/" element={<Products/>} exact />
                    <Route path="/about" element={<About/>} />
                    <Route path="/staff" element={<Staff/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/donate" element={<Donate/>} />
                    <Route path="/users" element={<Pokeuser/>} />
                    <Route path="/topics" element={<Topics/>} />
                </Routes>
            </main>
        )
    }
}

export default Main
