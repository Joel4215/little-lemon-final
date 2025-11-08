import React from 'react';
import './Main-Section.css';
import a from '../assests/Mario-Adrian-A.jpg'
import b from '../assests/Mario-Adrian-b.jpg'

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Little Lemon is a charming Mediterranean restaurant, focused on traditional recipes served
                        with a modern twist. We are family owned and operated, and we are dedicated to providing
                        our customers with the warmest hospitality and most memorable dining experience.
                    </p>
                    <p>
                        Our menu features a carefully curated selection of Mediterranean favorites, from crisp
                        Greek salads to authentic bruschetta, all prepared with locally sourced ingredients
                        and traditional cooking methods passed down through generations.
                    </p>
                </div>
                <div className="about-images">
                    <div className="image-stack">
                        <img
                            src={b}
                            alt="Mario and Adrian"
                            className="about-img bottom"
                        />
                        <img
                            src={a}
                            alt="Mario and Adrian"
                            className="about-img  top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
