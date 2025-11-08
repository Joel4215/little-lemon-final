import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from './assests/Logo .svg';

function Nav() {
  return (
    <nav className="nav-layout">
      <img src={logo} alt="Little Lemon logo" />
      <ul className="nav-links">
        <li><HashLink smooth to="/#hero">Home</HashLink></li>
        <li><HashLink smooth to="/#about">About</HashLink></li>
        <li><HashLink smooth to="/#menu">Menu</HashLink></li>
        <li><HashLink smooth to="/reservations">Reservations</HashLink></li>
        <li><HashLink smooth to="/order">Order Online</HashLink></li>
        <li><HashLink smooth to="/login">Login</HashLink></li>
      </ul>
    </nav>
  );
}

export default Nav;