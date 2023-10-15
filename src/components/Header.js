import React from 'react'
import logo from '../logo.png';
import Nav from './Nav'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <section className="wrapper">
      <NavWrapper>
        <Link to="/"><img src={logo} /></Link>
        <Nav />
      </NavWrapper>
    </section>

  )
}

const NavWrapper = styled.div`
  display: grid;
  padding-block: 30px;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  
`

export default Header