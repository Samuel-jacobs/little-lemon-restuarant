import React from 'react'
import BookingForm from '../components/BookingForm';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect, useReducer } from 'react';
import { fetchAPI, submitAPI } from '../components/fakeAPI';
import { useNavigate } from 'react-router-dom';


const date =  new Date();
console.log(date)
const newday = date.getDay();

console.log(newday)




// const initialState = {
//   selectedDate: '',
//   availableTimes: [
//     '17:00',
//     '18:00',
//     '19:00',
//     '20:00',
//     '21:00',
//   ],
// };




const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      try {
        const newDate = action.payload;
        const availableTimes = fetchAPI(newDate); // Fetch available times for the selected date
        
        return {
          ...state,
          selectedDate: newDate,
          availableTimes,
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        return state; // Return the current state in case of an error
      }
    default:
      return state;
  }
}
const initializeTimes =  () => {
  try {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const availableTimes = fetchAPI(formattedDate); // Fetch available times for today

    // Return the initial state with available times for today
    return {
      selectedDate: formattedDate,
      availableTimes,
    };
  } catch (error) {
    console.error('Error fetching data now bro:', error);
    return {
      selectedDate: '',
      availableTimes: [], // Provide default values in case of an error
    };
  }
}

function BookingPage() {
  useEffect(() => {



  }, []);

  

  const [state, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const navigate = useNavigate();
  const submitForm = async (formData) => {
    try {
      // Call the submitAPI function with the form data
      const isSuccess = await submitAPI(formData);

      if (isSuccess) {
        // Navigate to the booking confirmed page upon successful submission
        navigate('/ConfirmedBooking'); // Replace with your desired route
      } else {
        // Handle submission failure (if needed)
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle any errors that might occur during the submission
      console.error('Error submitting form:', error);
    }
  };
  console.log(state.availableTimes)
  return (
    <>
      <Header />
      <BookingForm className="wrapper" availableTimes = {state.availableTimes} submitForm={submitForm} dispatch = {dispatch} />
      <Footer />
    </>
  )
}

export default BookingPage;