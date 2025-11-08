import React from "react";
import './Main-Section.css';
import food from '../assests/restauranfood.jpg';

function Hero() {
    return (
        <div className="hero-box">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Little Lemmon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="button">Reserve a Table</button>
                </div>
                <img className="resturaunt-img" src={food} alt="Hero food" />
            </div>
        </div>
    );
}

export default Hero;