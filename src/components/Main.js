import React from 'react'
import styled from 'styled-components';
import BannerImage from '../Images/image.png';
import CardImg1 from '../Images/special1.png';
import CardImg2 from '../Images/special2.png';
import CardImg3 from '../Images/special3.png';

function Banner() {
  return (
    <BannerWrapper>
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned mediterranean resturant focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div>
        <img src={BannerImage} />
      </div>
    </BannerWrapper>
  )
}
function Specials() {
  return (
    <section>
      <div>
        <h5>This Week's Specials</h5>
        <button>Order Menu</button>
      </div>
      <CardWrapper>
        <Card>
          <img src={CardImg1} />
          <div>
            <h6>Greek Salad</h6>
            <p>$12.99</p>
          </div>
          <p>The famous greek salad of cripsy lettuce, peppers, olives, and our chicago style fettered cheese, garnished with crunchy garlic and rosemary croutons</p>
          <a>Order a delivery</a>

        </Card>
        <Card>
          <img src={CardImg2} />
          <div>
            <h6>Bruschetta</h6>
            <p>$5.99</p>
          </div>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
          <a>Order a delivery</a>

        </Card>
        <Card>
          <img src={CardImg3} />
          <div>
            <h6>Lemon Dessert</h6>
            <p>$5.00</p>
          </div>
          <p>This comes straight from grandma recipe book, every last ingredient has been sourced and is as authentic as can be imagines</p>
          <a>Order a delivery</a>

        </Card>
      </CardWrapper>
    </section>
  )
}

function Testimonials() {
  return (
    <section>
      <h2>Testimonials</h2>
      <SmallCardWrapper>
        <SmallCard>
          <h6>Rating</h6>
          <div>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
        <SmallCard>
          <h6>Rating</h6>
          <div>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
        <SmallCard>
          <h6>Rating</h6>
          <div>
            <img src='' alt='img' />
            <p>Name</p>
          </div>
          <p>Review Text</p>
        </SmallCard>
        <SmallCard>
          <h6>Rating</h6>
          <div>
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
    <section>
      <FlexWrapper>
        <div>
          <h2>Little Lemon</h2>
          <h4>Chicago</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div>
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


`
const CardWrapper = styled.div`


`
const Card = styled.div`

`

const SmallCardWrapper = styled.div`

`
const SmallCard = styled.div`

`
const FlexWrapper = styled.div`

`

export default Main