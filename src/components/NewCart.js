import React, { useState } from 'react'
import proudct1_s from "../images/image-product-1-thumbnail.jpg"
import proudct2_s from "../images/image-product-2-thumbnail.jpg"
import proudct3_s from "../images/image-product-3-thumbnail.jpg"
import proudct4_s from "../images/image-product-4-thumbnail.jpg"
import {FaTrashRestore} from "react-icons/fa"
import { useSelector } from 'react-redux'
import {currentProduct} from "../reducers/cart";
const NewCart = () => {
  const [empty,setEmpty] = useState(false);
  const currentProduct = useSelector((state) => state.cart.currentProduct);
  const numberOfprodcts = useSelector((state) => state.cart.numberOfprodcts);
  let price = 125.00 
  let total = price * numberOfprodcts 
  let emptyCart = <>
  <h3 className='h3-cart'>Cart</h3>
  <hr></hr>
  <span className='bla-cart'>Your cart is empty.</span>
  </>
  let cart = <>
  <div className='cart-new'>
  <h3 className='h3-cart'>Cart </h3>
  <hr></hr>
  <div className='image-new-cart'>
    <div className='div1'>
    <img className='img-s' src={currentProduct} alt='gerg'/>
    <span className='fall'>Fall Limited Edition Sneakers </span>
    <div className='blablabla'>
     ${price} x {numberOfprodcts} <span className='i'>{total}</span>  
    </div>
    <button className='remove-new-cart' onClick={()=> setEmpty(!empty)}><FaTrashRestore fontSize={20}/></button>
    </div>
  </div>
  </div>
  </>
  return (
    <>
    {currentProduct == null || empty   ? <div className='newCart'>
      {emptyCart}
    </div> : <div className='c'>
      {cart}
    </div>}
    </>
  )
}

export default NewCart
