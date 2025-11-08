import React from 'react';
import logo from './assests/Logo .svg';

function Footer() {
    return (
        <footer className='footer-layout'>
            <img src={logo} alt="Little Lemon logo" />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li><h3>Navigation</h3></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Reservations</a></li>
                                <li><a href="#">Order Online</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><h3>Contact</h3></li>
                                <li>Address</li>
                                <li>Phone number</li>
                                <li>Email</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li><h3>Social Media</h3></li>
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