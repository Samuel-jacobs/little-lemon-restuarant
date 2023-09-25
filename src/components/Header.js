import React from 'react'
import logo from '../logo.png';
import Nav from './Nav'
import styled from 'styled-components';


function Header() {
  return (
    <>
      
      <img src={logo} />
      <Nav />
    </>

  )
}

export default Header