import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu,setMenu] = useState("mobilephones")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Tech Junction</p>
        </div>
    <ul className='nav-menu'>
    <li onClick={()=>{setMenu("mobilephones")}}> <Link style={{ textDecoration:'none'}} to='/'>Home</Link>{menu==="mobilephones"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("smartphones")}}><Link style={{ textDecoration:'none'}}  to='smartphones'>Smartphones</Link>{menu==="smartphones"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("android")}}><Link style={{ textDecoration:'none'}}  to='/android'>Android</Link>{menu==="android"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("apple")}}><Link style={{ textDecoration:'none'}}   to='/apple'>Apple</Link>{menu==="apple"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon } alt="" /></Link>
        
    </div>
</div>
  )
}
export default Navbar