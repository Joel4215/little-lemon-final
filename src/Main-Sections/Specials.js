import React from 'react';
import './Main-Section.css';
import greekSalad from '../assests/greek salad.jpg';
import bruschetta from '../assests/bruchetta.svg';
import lemonDessert from '../assests/lemon dessert.jpg';

function Specials() {
    const specials = [
        {
            name: 'Greek salad',
            price: '$12.99',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: greekSalad
        },
        {
            name: 'Bruschetta',
            price: '$5.99',
            description: 'Grilled bread smeared with garlic and seasoned with salt and olive oil, topped with fresh tomatoes and basil.',
            image: bruschetta
        },
        {
            name: 'Lemon Dessert',
            price: '$7.00',
            description: 'A delightful lemon tart with a crisp crust and silky lemon filling — the perfect sweet finish.',
            image: lemonDessert
        }
    ]
    return (
        <section className="specials">
            <div className="specials-content">
                <h2>Specials</h2>
                <button className="button">Online Menu</button>
            </div>

            <div className="cards-row">
                {specials.map((special, index) => (
                <div className="special-card">
                    <div className="card-image">
                        <img src={special.image} alt=''/>
                    </div>
                    <div className="card-content">
                        <div className="card-header">
                            <h3>{special.name}</h3>
                            <span className="price">{special.price}</span>
                        </div>
                        <p>{special.description}</p>
                        <button className="order-btn">Order a delivery</button>
                    </div>
                </div>

                ))}
            </div>
        </section>
    );
}

export default Specials;
