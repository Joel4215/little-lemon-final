import React from 'react';
import logo from './assests/Logo .svg';
import './App.css';

function Nav() {
    return (
        <nav className='nav-layout'>
            <img src={logo} alt="Little Lemon logo" />
            {/* update with positions links to other pages later */}
            <ul className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;