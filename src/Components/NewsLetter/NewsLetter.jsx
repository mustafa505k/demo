import React from 'react'
import './NewsLetter.css'


 const NewsLetter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive Offers on your email</h1>
        <p>join now and Stay connected with us</p>
        <div>
    <input type="email" placeholder='your Email id'/>
    <button>JOIN</button>
        </div>
        </div>
  )
}
export default NewsLetter