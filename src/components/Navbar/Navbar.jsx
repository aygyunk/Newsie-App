import React, { Component } from 'react';

import Logo from 'components/Logo';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Logo />
      </div>
    );
  }
}

export default Navbar;
