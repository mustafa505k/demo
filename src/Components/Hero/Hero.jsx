import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.jpg'

const Hero = () => {
  return (

    <div className='hero'>
        <div className="hero-left">
        <h2>Welcome to Tech Junction <br />
          Big Dussehra Sale</h2>
        <div>
           
            <p>Shop Now</p>
            <p>& get 50% off</p>
         </div>
         <div className='hand-hand-icon'>
            
            <img src={hand_icon} alt="" />
            </div>
         <div className="hero-latest-btn">
            <div>NEW MOBILE</div>
            <img src={arrow_icon} alt="" />
         </div>
    </div>
        <div className="hero-right">
        <img src={hero_image} alt="" />
        </div>
        
    </div>
  )
}
export default Hero