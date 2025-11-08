import React from 'react';
import './Main-Section.css';

function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah M.',
            rating: 5,
            comment: 'The Mediterranean cuisine here is absolutely authentic! The Greek salad transported me back to my vacation in Greece.',
            image: 'customer1.jpg'
        },
        {
            name: 'John D.',
            rating: 5,
            comment: 'Best bruschetta in town! The bread is perfectly toasted and the toppings are always fresh.',
            image: 'customer2.jpg'
        },
        {
            name: 'Maria L.',
            rating: 5,
            comment: 'The lemon dessert is to die for! Light, refreshing, and the perfect end to any meal.',
            image: 'customer3.jpg'
        },
        {
            name: 'David R.',
            rating: 5,
            comment: "Fantastic atmosphere and even better food. This place has become our family's favorite spot.",
            image: 'customer4.jpg'
        }
    ];

    return (
        <section className="testimonials">
            <div className="testimonials-header">
                <h2>Testimonials</h2>
            </div>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-rating">
                            {'★'.repeat(testimonial.rating)}
                        </div>
                        <div className="testimonial-content">
                            <div className="testimonial-profile">
                                <div className="testimonial-image-placeholder"></div>
                                <h3>{testimonial.name}</h3>
                            </div>
                            <p>{testimonial.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
