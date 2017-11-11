import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from 'components/Logo';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Logo />

        <div className="Navbar__links">
          <NavLink
            to="/world"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>world</p>
          </NavLink>
          <NavLink
            to="/sports"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>sports</p>
          </NavLink>
          <NavLink
            to="/tech"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>tech</p>
          </NavLink>
          <NavLink
            to="/arts"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>arts</p>
          </NavLink>
          <NavLink
            to="/fashion"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>fashion</p>
          </NavLink>
          <NavLink
            to="/business"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>business</p>
          </NavLink>
          <NavLink
            to="/travel"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>travel</p>
          </NavLink>
          <NavLink
            to="/environment"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>environment</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
