import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function ConfirmMessage() {
    return (
        <div className="container confirmed-booking">
      {/* <FontAwesomeIcon icon={faCircleCheck} size="3x" /> */}
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p> <br></br>
      <Link to={"/"}>Back home</Link>
    </div>
    )
}

function ConfirmedBooking() {
  return (
    <>
        <Header />
        <ConfirmMessage />
        <Footer />
    </>
  )
}

export default ConfirmedBooking