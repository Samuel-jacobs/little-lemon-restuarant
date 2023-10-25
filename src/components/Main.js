import React from 'react'
import styled from 'styled-components';
import BannerImage from '../Images/image.png';
// import Meals from './Meals';
import { Link } from 'react-router-dom';
import { mealContent } from './Meals';

function Banner() {
  return (
    <BannerWrapper className='wrapper'>
      <div className='banner-text'>
        <h1>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p className='banner-text'>We are a family owned mediterranean resturant focused on traditional recipes served with a modern twist.</p>
        <Link to="./bookingpage"><button className='btn'>Reserve a Table</button></Link>
      </div>
      <div className='banner-image'>
        <img src={BannerImage} />
      </div>
    </BannerWrapper>
  )
}



function Specials() {
  return (
    <section className='specials wrapper'>
      <div className='flex'>
        <h2>This Week's Specials</h2>
        <button className='btn'>Order Menu</button>
      </div>
      <CardWrapper>
      {mealContent.map((meal) => (
        <Card>
          <img src={meal.image} />
          <div className='card-body'>
            <div className='flex'>
              <h5>{meal.name}</h5>
              <p className='price-text'>{meal.price}</p>
            </div>
            <p>{meal.description}</p>
            <a>Order a delivery</a>
          </div>
        </Card>
      ))}


    </CardWrapper>
      {/* <CardWrapper>
        <Card>
          <img src={CardImg1} />
          <div className='card-body'>
            <div className='flex'>
              <h5>Greek Salad</h5>
              <p className='price-text'>$12.99</p>
            </div>
            <p>The famous greek salad of cripsy lettuce, peppers, olives, and our chicago style fettered cheese, garnished with crunchy garlic and rosemary croutons</p>
            <a>Order a delivery</a>
          </div>
        </Card>
        <Card>
          <img src={CardImg2} />
          <div className='card-body'>
            <div className='flex'>
              <h5>Bruschetta</h5>
              <p className='price-text'>$5.99</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
            <a>Order a delivery</a>
          </div>
        </Card>
        <Card>
          <img src={CardImg3} />
          <div className='card-body'>
            <div className='flex'>
              <h5>Lemon Dessert</h5>
              <p className='price-text'>$5.00</p>
            </div>
            <p>This comes straight from grandma recipe book, every last ingredient has been sourced and is as authentic as can be imagines</p>
            <a>Order a delivery</a>
          </div>
          

        </Card>
      </CardWrapper> */}
    </section>
  )
}

function Testimonials() {
  return (
    <section className='testimonials wrapper'>
      <h2>Testimonials</h2>
      <SmallCardWrapper>
        <SmallCard>
          <h6>Rating</h6>
          <div className='flex'>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
        <SmallCard>
          <h6>Rating</h6>
          <div className='flex'>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
        <SmallCard>
          <h6>Rating</h6>
          <div className='flex'>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
        <SmallCard>
          <h6>Rating</h6>
          <div className='flex'>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
      </SmallCardWrapper>
    </section>
  )
}
function About() {
  return (
    <section className='about wrapper'>
      <FlexWrapper>
        <div className='about-text'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='about-image'>
          <img src={BannerImage} />
        </div>
      </FlexWrapper>
    </section>
  )
}

function Main() {
  return (
    <>
      <Banner />
      <Specials />
      <Testimonials />
      <About />
    </>
  )

}



const BannerWrapper = styled.div`
  background-color: #495e57;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  
    p {
      max-width: 267px;
      margin-bottom: 20px;
    }
    
    img {
      height: 435px;
      width: 375px;
      margin-bottom: -50px;
    }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-inline: 20px;
    .banner-text {
      width: 100%;
      
    }
    .banner-image {
      padding-top: 30px;
    }
  }

`
const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

`
const Card = styled.div`
    margin-bottom: 30px;
    height: 440px;
    width: 265px;
    background-color: #edefee;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    img {
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
    }
      .card-body {
        padding: 20px;
        .flex {
          padding-bottom: 15px;
          
        }

        h5 {
          font-size: 24px;
          margin: 0;
          padding: 0;
        }
        p {
          color: #495e57;
          margin-bottom: 15px;
        }
        p.price-text {
          color: #ee9972;
        }
      }

      @media screen and (max-width: 768px) {
        
      }
`

const SmallCardWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      padding-top: 50px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

`
const SmallCard = styled.div`
      height: 175px;
      width: 200px;
      background-color: #edefee;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h6 {
        align-self: flex-start;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: bold;
      }
      div {
        align-self: flex-start;
        margin-bottom: 15px;

        p {
          font-size: 14px;
          padding-left: 10px;
        }
      }
      p {
        align-self: flex-start;
        font-size: 14px;
      }

      @media screen and (max-width: 768px) {
        margin-bottom: 30px;
      }

`
const FlexWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-block: 50px;

      .about-text {
        h2 {
          font-size: 64px;
          line-height: 0.5;
        }
        h3 {
          font-size: 40px;
          font-weight: 400;
          
        }
        p {
          margin-top: 30px;
          text-align: justify;
          max-width: 370px;
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
        .about-text {
          margin-bottom: 30px;
        }
      }

`

export default Main