import React from 'react'
import logo from '../logo.png';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper className='wrapper'>
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
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-block: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: #495e57;
  color: #edefee;
  
    ul {
      list-style-type: none;
      color: #edefee;
      margin-top: 20px;
      li {
        margin-bottom: 10px;
      }
    }
  

`
export default Footer