import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <>
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Menu</Link>
            <Link to="/">Reservation</Link>
            <Link to="/bookingpage">Order Online </Link>
            <Link to="/">Login</Link>
        </div>
    </>
  )
}

export default Nav