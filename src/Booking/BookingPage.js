import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      dispatch({ type: 'setTimes', times: newTimes });
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
        <BookingForm
        formData={reservationData}
        availableTimes={availableTimes}
        onChange={handleFormChange}
        onSubmit={handleSubmit}/>
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
export default BookingPage;