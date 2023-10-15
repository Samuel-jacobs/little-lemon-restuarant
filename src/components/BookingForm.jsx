import React from 'react'
import { useState } from 'react';
import { submitAPI } from './fakeAPI';


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
  const [dateError, setDateError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [timeError, setTimeError] = useState('');

  const isDateValid = (value) => {
    const selectedDate = new Date(value);
    const currentDate = new Date();
    return selectedDate >= currentDate;
  };

  const isGuestsValid = (value) => {
    const minGuests = 1; // Minimum number of guests
    const maxGuests = 10; // Maximum number of guests
    const parsedGuests = parseInt(value, 10);
    return !isNaN(parsedGuests) && parsedGuests >= minGuests && parsedGuests <= maxGuests;
  };

  

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'SET_DATE', payload: e.target.value });
    if (!isDateValid(e.target.value)) {
      setDateError('Please select a future date');
    } else {
      setDateError('');
    }
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value);
    
    if (e.target.value === "") {
      setTimeError('Please select a time');
    } else {
      setTimeError('');
    }
  }
  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
    if (!isGuestsValid(e.target.value)) {
      setGuestsError('please Select a number between 1 and 10')
    } else {
      setGuestsError('')
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData)

  }
  // Enable or disable the submit button based on form validity
  const isFormValid =
    date && isDateValid(date) &&
    
    guests && isGuestsValid(guests) 
   
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
          required={true}
          onChange={handleDateChange}
          className={dateError ? '' : 'error'}
           />
           {dateError && <div className="error">{ dateError }</div>}
      </div>
      <div className='form-item'>
        <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          name="time"
          required={true}
          onChange={handleTimeChange}
          className={timeError ? '' : 'error'}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => <option value={time} key={time}>
              {time}
            </option>
            )}
            {timeError && <div className="error">{ timeError }</div>}
        </select>
        
      </div>
      <div className='form-item'>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          name='guests'
          
          type="number" 
          placeholder="1" 
          // min="1" max="10"
          required={true} 
          className={guestsError ? '' : 'error'}
          onChange={ handleGuestsChange }
          id="guests"/>
          {guestsError && (
          <div className="error">
            Please enter a valid number of guests (between 1 and 10).
          </div>
        )}
      </div>
      <div className='form-item'>
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          name='occasion'
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
          required={true}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        
      </div>

      <input className='submit' aria-label="On Click" type="submit" disabled={!isFormValid} value="Make Your reservation" />
    </form>
    </section>
  )
};


export default BookingForm