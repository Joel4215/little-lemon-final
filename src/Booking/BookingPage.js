import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import './Booking.css';

function BookingPage() {
        const [reservationData, setReservationData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

   function timesReducer(state, action) {
  switch (action.type) {
    case 'dateChanged':
      return updateTimes(action.date);
    case 'setTimes':
      return action.times;
    default:
      return state;
  }
}

const [availableTimes, dispatch] = useReducer(timesReducer, null, initializeTimes);

  const navigate = useNavigate();

useEffect(() => {
  if (reservationData.date) {
    const newTimes = updateTimes(reservationData.date);
    const todayISO = new Date().toISOString().slice(0, 10);

    const filtered = reservationData.date === todayISO
      ? newTimes.filter(t => isFutureSlotOnDate(t, reservationData.date))
      : newTimes;

    dispatch({ type: 'setTimes', times: filtered });
  }
}, [reservationData.date]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;

   if (name === 'date') {
    dispatch({ type: 'dateChanged', date: value });
  }
        setReservationData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

const handleSubmit = (e) => {
  e.preventDefault();
  const ok = Boolean(submitForm(reservationData)); // true/false

  if (ok) {
    navigate('/confirmed', {
      state: {
        message: 'Your reservation is confirmed!',
        reservation: reservationData,
      },
    });
  } else {
    alert('Submission failed. Please try again.');
  }
};


    return(
        <section className="booking-page">
          <div className="booking-card">
            <h1>Reservations</h1>
            <BookingForm
              formData={reservationData}
              availableTimes={availableTimes}
              onChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
        </section>
    );
}

function submitForm (reservationData){
return window.API.submitAPI(reservationData);
}

function updateTimes(date) {
  return window.API.fetchAPI(new Date(date));
}

function initializeTimes() {
  return window.API.fetchAPI(new Date());
}

function isFutureSlotOnDate(timeStr, dateStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const slot = new Date(dateStr);
  slot.setHours(h, m, 0, 0);
  return slot.getTime() > Date.now();
}
export default BookingPage;