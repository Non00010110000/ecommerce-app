import React from "react"; 
import {Link} from "react-router-dom"
import { FaBars } from 'react-icons/fa';
import {GrFormClose} from "react-icons/gr";
import {AiOutlineShoppingCart} from "react-icons/ai";
import imgNav from "./image-avatar.png"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../reducers/navSlice";
import { toggleNewCart } from "../reducers/navSlice";

const Nav = () => {
    const numberOfprodcts = useSelector((state) => state.cart.numberOfprodcts);
    const showNewCart = useSelector((state) => state.nav.showNewCart); // use Redux state
    const menuOpen = useSelector((state) => state.nav.menuOpen);
    const dispatch = useDispatch();
  
    const handleMenuOpen = () => {
      dispatch(toggleMenu());
    };
  
    const handleCartOpen = () => {
      dispatch(toggleNewCart()); // dispatch the new action
      
    };
   return (
    <>
    
    <div className={ !menuOpen? 'nav' : "nav-opacity"}>
       <div className="nav-section-one">
        <div>

    
        </div>
        <div>
       <h1>sneakers</h1>
        </div>
       </div>
       <div className="nav-section-two">
        <div>

<button className="btn-nav" onClick={handleCartOpen}>
  
        <AiOutlineShoppingCart fontSize={20}/>
  </button>
        </div>
       <img className="avater" src={imgNav}/>
       </div>
     </div>

     <hr></hr>
    </>


   )
}

export default Nav