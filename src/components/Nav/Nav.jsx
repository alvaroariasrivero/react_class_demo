import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
  render() {
    return <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/staff">Staff</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/users">Pokeusers</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
    </nav>;
  }
}

export default Nav;
