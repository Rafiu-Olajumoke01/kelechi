import React from 'react'
import { allproducts } from "./ProductPage/ProductMain"

function Test() {
    const clothing = allproducts.filter(product => product.category === 'Clothing')
  return (
    <div>
      {
        clothing.map(product => (
          <div key={product.id}>
            {/* <h2>{product.name}</h2> */}
            {/* <p>{product.description}</p> */}
            <img src={product.image} alt={product.name} />
          </div>
        ))
      }
    </div>
  )
}

export default Test
