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
            to="/music"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>music</p>
          </NavLink>
          <NavLink
            to="/gaming"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>gaming</p>
          </NavLink>
          <NavLink
            to="/business"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>business</p>
          </NavLink>
          <NavLink
            to="/entertainment"
            className="Navbar__links__link"
            activeClassName="is-active"
          >
            <p>entertainment</p>
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
