import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png';
import { useState } from 'react';
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa';


function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navbar-main'>
      <div className='navbar-container'>
        <div className='nav-logo'>
          <Link to="/"><img src={logo} /></Link>
        </div>
       
        <div className={`navbar ${isOpen ? 'open' : 'close'}`}>
         
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Menu</Link>
            <Link to="/">Reservation</Link>
            <Link to="/bookingpage">Order Online </Link>
            <Link to="/">Login</Link>
          
        </div>
        <button className="hamburger" onClick={toggleNavbar}>
        <FaHamburger/>
          
        </button>
      </div>
    </nav>
  )
}

export default Nav