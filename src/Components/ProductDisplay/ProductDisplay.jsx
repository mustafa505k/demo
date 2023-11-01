import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/Shopcontext';
 const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
    <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        </div>
        <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-start">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(4.4)</p>
    </div>
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">₹{product.old_price}</div>
    <div className="productdisplay-right-price-new">₹{product.old_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Apple iPhone 13 Pro Alpine Green 1TB
            </div>
           <div className="productdisplay-right-size">
            <h1>Select Color</h1>
            <div className="productdisplay-right-sizes">
                <div className="d1">Y</div>
                <div className="d2">G</div>
                <div className="d3">R</div>
                <div className="d4">B</div>
            </div>
           </div>
     
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Iphone,APPLE</p>
        <p className='productdisplay-right-category'><span>Tags:</span>Brand new,</p>
</div>
        </div>
   
  )
}
export default ProductDisplay