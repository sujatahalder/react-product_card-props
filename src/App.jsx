import React from 'react'
import ProductDetails from './Product/ProductDetails'
import './App.css'

const App = () => {
  return (
    <>
      <h1 className='headerText'>Product Details:- </h1>
      <div className='row'>
      <ProductDetails
          name="T-Shirt" 
          price="499" 
          color="Red" 
          size="M" 
          details="100% Cotton"
        />

        <ProductDetails
          name="Jeans" 
          price="999" 
          color="Blue" 
          size="32" 
          details="Stretch Fit"
        />

        <ProductDetails
          name="Shoes" 
          price="1299" 
          color="White" 
          size="8" 
          details="Sports Wear"
        />
        
      </div>
    </>
  )
}

export default App