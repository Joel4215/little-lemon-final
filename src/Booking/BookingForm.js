import React, {useState} from "react";
import './Booking.css';


function BookingForm({ formData, availableTimes, onChange, onSubmit }) {
    return (
        <form className="booking-form" onSubmit={onSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" onChange={onChange} value={formData.date}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" onChange={onChange} value={formData.time}>
                <option value="">Select a time</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" onChange={onChange} value={formData.guests}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={onChange} value={formData.occasion}>
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
            </select>

            <button type="submit">Make Your reservation</button>
        </form>
    );
}


export default BookingForm;