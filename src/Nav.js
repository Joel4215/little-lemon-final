import React from 'react';
import logo from './assests/Logo .svg';

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Little Lemon logo" />
            {/* update with positions links to other pages later */}
            <ul>
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