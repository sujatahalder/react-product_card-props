import React from 'react';
import './productStyle.css';

const ProductDetails = ({name,price,size,color,details}) => {
  return (
    <>
        <div className='cardbox'>
            <p>name: {name}</p>
            <p>price: {price}</p>
            <p>Size: {size}</p>
            <p>Color: {color}</p>
            <p>Details: {details}</p>
        </div>
    </>
  )
}

export default ProductDetails;