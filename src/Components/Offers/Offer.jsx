import React from 'react'
import './Offer.css'
import exclucive_image from '../Assets/exclusive_image.png'
 const Offer = () => {
  return (
    <div className='Offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check now</button>
        </div>
        <div className="offers-right">
    <img src={exclucive_image} alt="" />
        </div>
    </div>
  )
}
export default Offer