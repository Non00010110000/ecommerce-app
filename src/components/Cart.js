import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'; 
import { setCurrentProduct,decreseProduct,addNewProduct } from '../reducers/cart';
import proudct1 from "../images/image-product-1.jpg";
import proudct2 from "../images/image-product-2.jpg";
import proudct3 from "../images/image-product-3.jpg";
import proudct4 from "../images/image-product-4.jpg";
import proudct1_s from "../images/image-product-1-thumbnail.jpg"
import proudct2_s from "../images/image-product-2-thumbnail.jpg"
import proudct3_s from "../images/image-product-3-thumbnail.jpg"
import proudct4_s from "../images/image-product-4-thumbnail.jpg"

const Cart = () => {
  const add = () => {
    dispatch(addNewProduct());
  };
  
  const remove = () => {
    dispatch(decreseProduct());
  };
  
  const currentImage = useSelector((state) => state.product.currentImage);
  const numberOfprodcts = useSelector((state) => state.cart.numberOfprodcts);
  const dispatch = useDispatch();
  const  hadnelAddNewProduct = ()=>{
if (currentImage == proudct1 ) { 
  dispatch(setCurrentProduct (proudct1_s))
}
else if (currentImage == proudct2){
  dispatch(setCurrentProduct(proudct2_s))
}
else if ( currentImage == proudct3) {
  dispatch(setCurrentProduct(proudct3_s))
}
else if (currentImage == proudct4){
  dispatch(setCurrentProduct(proudct4_s))
}
dispatch(addNewProduct())


  }

  return (
    
    <div className='cart'>
    <h4>SNEAKER COMPANY</h4>
    <h1 className='h1-bla'>Fall Limited Edition Sneakers</h1>
    <span className='bla'>These Low-profile sneakers are your perfect casual wear companion.Feautring a durable rubber outer sole .they'll withstand everything the weather can offer.</span>
    <div className='price-contiar'>
        <span className='price'>$125.00</span>
        <span className='down'>50%</span>
        <span className='x'>$250.00</span>
    </div>
    <div className='add-remove'>  
        <button className='remove' onClick={()=>remove()}>-</button>
        <span className='price-remove'>{numberOfprodcts}</span>
        <button className='add' onClick={()=> add()}>+</button>
    </div>
    <div className='btn-final'><button  onClick={()=> hadnelAddNewProduct()} className='button-final'><AiOutlineShoppingCart fontSize={15}/> Add to cart</button></div>
    </div>
  )
}

export default Cart;