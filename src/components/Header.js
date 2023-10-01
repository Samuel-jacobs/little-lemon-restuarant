import React from 'react'
import logo from '../logo.png';
import Nav from './Nav'
import styled from 'styled-components';


function Header() {
  return (
    <section className="wrapper">
      <NavWrapper>
        <img src={logo} />
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