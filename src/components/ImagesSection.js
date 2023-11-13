import React, { useEffect } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentImage } from '../reducers/proudctSlice';
import proudct1 from "../images/image-product-1.jpg";
import proudct2 from "../images/image-product-2.jpg";
import proudct3 from "../images/image-product-3.jpg";
import proudct4 from "../images/image-product-4.jpg";
import NewCart from './NewCart';
import Cart from './Cart';

const ImagesSection = ({handleAddToCart}) => {
  const showNewCart = useSelector((state) => state.nav.showNewCart); // use Redux state
  const currentImage = useSelector((state) => state.product.currentImage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentImage(proudct1));
  }, []);

  const handleNextImage = () => {
    if (currentImage === proudct1) {
      dispatch(setCurrentImage(proudct2));
    } else if (currentImage === proudct2) {
      dispatch(setCurrentImage(proudct3))
    } else if (currentImage === proudct3) {
      dispatch(setCurrentImage(proudct4));
    }
  };

  const handlePreviousImage = () => {
    if (currentImage === proudct4) {
      dispatch(setCurrentImage(proudct3));
    } else if (currentImage === proudct3) {
      dispatch(setCurrentImage(proudct2));
    } else if (currentImage === proudct2) {
      dispatch(setCurrentImage(proudct1));
    }
  };




  return (

    <div className="image-container">
    {!showNewCart ? (
      <>
        <button onClick={handlePreviousImage} className="left-button">
          <FiArrowLeftCircle fontSize={30} color="#fff" />
        </button>
        <img src={currentImage} className="products" alt="Product Image" />
        <button onClick={handleNextImage} className="right-button">
          <FiArrowRightCircle color="#fff" fontSize={30} />
        </button>
      </>
    ) :

    (
      <>
      <button onClick={handlePreviousImage} className="left-button">
        <FiArrowLeftCircle fontSize={30} color="#fff" />
      </button>
      <img src={currentImage} className="products" alt="Product Image" />
      <button onClick={handleNextImage} className="right-button">
        <FiArrowRightCircle color="#fff" fontSize={30} />
      </button>
      <NewCart/>
    </>
    )}
  </div>
    
  );
};

export default ImagesSection;
