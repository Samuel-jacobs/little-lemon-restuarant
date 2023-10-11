import React from 'react'
import BookingForm from './BookingForm';
import Header from "./Header";
import Footer from "./Footer";
import { useState, useReducer } from 'react';

const date =  new Date();
console.log(date)
const newday = date.getDay();

console.log(newday)


const  myTimes = () => {
  return [
    {id: 1, time: "17:00"},
    {id: 2, time: "18:00"},
    {id: 3, time: "19:00"},
    {id: 4, time: "20:00"},
    {id: 5, time: "21:00"},
    {id: 6, time: "22:00"}
  ]
}
const initializeTimes = myTimes();



const updateTimes = (state, action) => {
  switch (action.type) {
    case 1:
      // return state.map((time) => {
      //   if (newday >= 1 && newday <= 6) {
      //     return time;
      //   } else if (newday === 7) {
      //     return {...time.slice(2)}
      //   }
      // })
      return state;
    default:
      return state;
    
  }
}


function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  


  return (
    <>
      <Header />
      <BookingForm className="wrapper" times = {availableTimes}   dispatch = {dispatch} />
      <Footer />
    </>
  )
}

export default BookingPage;