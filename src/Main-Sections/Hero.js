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
                        Fresh, vibrant Mediterranean dishes crafted with seasonal ingredients and a dash of sunny Chicago hospitality.
                    </p>
                    <button className="button">Reserve a Table</button>
                </div>
                <img className="resturaunt-img" src={food} alt="Hero food" />
            </div>
        </div>
    );
}

export default Hero;