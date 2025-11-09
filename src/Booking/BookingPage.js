import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

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
    default:
      return state;
  }
}

const [availableTimes, dispatch] = useReducer(timesReducer, null, initializeTimes);

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
        console.log('Form submitted:', reservationData);
    };
    return(
        <BookingForm
        formData={reservationData}
        availableTimes={availableTimes}
        onChange={handleFormChange}
        onSubmit={handleSubmit}/>
    );
}

function updateTimes(date) {
  return ["17:00", "18:00", "19:00", "20:00"];
}

function initializeTimes(){
    return ["13:00", "14:00", "15:00", "16:00"];
}
export default BookingPage;