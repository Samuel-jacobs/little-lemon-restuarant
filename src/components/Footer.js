import React from 'react'
import logo from '../logo.png';

function Footer() {
  return (
    <>
      <div>
        <img src={logo} />
      </div>
      <div>
        <h5>Quick Link</h5>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div>
        <h5>Social Media Links</h5>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          
        </ul>

      </div>
    </>
  )
}

export default Footer