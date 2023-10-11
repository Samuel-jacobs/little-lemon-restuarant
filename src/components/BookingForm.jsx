import React from 'react'
import { useState } from 'react';

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime]  = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e.target.value)
    
  }
  
  
  return (
    <>
    <h2 className='bookingformheader'>Book Now</h2>
    <form className='bookingform' onSubmit={handleSubmit} style = {{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          name='date'
          value={date}
          onChange={(e) => handleChange(e.target.value)}
           />
      </div>
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          value={time}
          name="time"
          onChange={(e) => setTime(e.target.value)}
          >
            {props.times.map((time) => <option key={time.id}>{time.time}</option>
            )}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          name='guests'
          onChange={(e) => setGuests(e.target.value) }
          type="number" placeholder="1" min="1" max="10" id="guests"/>
      </div>
      <div>
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

      <input type="submit" value="Make Your reservation" />
    </form>
    </>
  )
};


export default BookingForm