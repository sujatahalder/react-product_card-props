import React from 'react';
import './productStyle.css';

const ProductDetails = ({data}) => {
  return (
    <>
        <div className='cardbox'>
            <p>Name: {data.name}</p>
            <p>Price: {data.price}</p>
            <p>Size: {data.size}</p>
            <p>Color: {data.color}</p>
            <p>Details: {data.details}</p>
        </div>
    </>
  )
}

export default ProductDetails;