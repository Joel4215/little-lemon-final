import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Booking.css';

function ConfirmedBooking() {
  const location = useLocation();
  const message = location.state?.message || 'Your reservation is confirmed!';
  const reservation = location.state?.reservation;

  return (
    <section className="confirmed-page">
      <div className="confirmed-card">
        <h2>{message}</h2>
        {reservation && (
          <div className="reservation-summary">
            <p><strong>Date:</strong> {reservation.date}</p>
            <p><strong>Time:</strong> {reservation.time}</p>
            <p><strong>Guests:</strong> {reservation.guests}</p>
            <p><strong>Occasion:</strong> {reservation.occasion}</p>
          </div>
        )}
        <p><Link to="/">Back to Home</Link></p>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
