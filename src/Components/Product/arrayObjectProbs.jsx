import React from 'react'
import ProductDetails from './Product/ProductDetails'
import './App.css';

//passing multiple objects as props an show them in the cardbox

const App = () => {

  const products = [
     {
     name :"T-Shirt" ,
     price :"499" ,
     color :"Red" ,
     size :"M" ,
     details :"100% Cotton"
  },
  {
    name :"item 2",
    price :"300",
    size :"medium",
    color :"blue",
    details :"100 % cotton"

  },
    {
    name : "Shoes",
    price : "1299",
    color : "White",
    size : "8",
    details : "Sports Wear"
  }
];
  return (
    <>
      <h1 className='headerText'>Product Details:- </h1>
      <div className='row'>
        {products.map((item, index) => (
          <ProductDetails key={index} data={item} />
        ))}
      </div>
    </>
  )
}


export default App