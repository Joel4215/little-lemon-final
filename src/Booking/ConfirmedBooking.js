import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const message = location.state?.message || 'Your reservation is confirmed!';
  const reservation = location.state?.reservation;

  return (
    <section className="confirmed-booking">
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
    </section>
  );
}

export default ConfirmedBooking;
