import './Booking.css';


function BookingForm({ formData, availableTimes, onChange, onSubmit }) {
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    return (
        <form className="booking-form" onSubmit={onSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" min={minDate} onChange={onChange} value={formData.date}/>

            <label htmlFor="res-time">Choose time</label>
            <div className="select-control">
            <select id="res-time" name="time" onChange={onChange} value={formData.time}>
                <option value="">Select a time</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
            </div>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" min={1} onChange={onChange} value={formData.guests}/>

            <label htmlFor="occasion">Occasion</label>
            <div className="select-control">
            <select id="occasion" name="occasion" onChange={onChange} value={formData.occasion}>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
            </select>
            </div>

            <button disabled={!formData.date || !formData.time || !formData.guests || !formData.occasion} type="submit">Make Your reservation</button>
        </form>
    );
}


export default BookingForm;