import React from 'react';
import logo from './assests/Logo .svg';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon logo" />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h3>Navigation</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Reservations</a></li>
                                <li><a href="#">Order Online</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </td>
                        <td>
                            <h3>Contact</h3>
                            <ul>
                                <li>Address</li>
                                <li>Phone number</li>
                                <li>Email</li>
                            </ul>
                        </td>
                        <td>
                            <h3>Social Media</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>X</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </footer>
    );
}

export default Footer;