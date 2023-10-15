import React from 'react'
import { useState } from 'react';
import { submitAPI } from './fakeAPI';
import { useNavigate } from 'react-router-dom';

function BookingForm( {availableTimes, dispatch, submitForm} ) {
  const [date, setDate] = useState("");
  const [time, setTime]  = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [formData, setFormData] = useState({
    date: date, // Initialize date with a value
    time: time,
    guests: guests,
    occasion: occasion // Initialize time with a value
    // Add more form fields as needed
  });

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'SET_DATE', payload: e.target.value });
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  }
  return (
    <section className='wrapper'>
    <h2 className='bookingformheader'>Book Now</h2>
    <form className='bookingform' onSubmit={handleSubmit}  >
      <div className='form-item'>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={date}
          type="date"
          name='date'
          onChange={handleDateChange}
           />
      </div>
      <div className='form-item'>
        <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          name="time"
          onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((time) => <option key={time}>{time}</option>
            )}
        </select>
      </div>
      <div className='form-item'>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          name='guests'
          onChange={(e) => setGuests(e.target.value) }
          type="number" placeholder="1" min="1" max="10" id="guests"/>
      </div>
      <div className='form-item'>
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          name='occasion'
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
      </div>

      <input className='submit' type="submit" value="Make Your reservation" />
    </form>
    </section>
  )
};


export default BookingForm