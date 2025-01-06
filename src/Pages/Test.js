import React from 'react'
import { allproducts } from "./ProductPage/ProductMain"
import { Link } from 'react-router-dom'

function Test() {
  const clothing = allproducts.filter(product => product.category === 'Clothing')
  return (
    <div className="container-fluid">
      <div className="row">
        {
          clothing.map(product => (
            <div key={product.id} className="col-sm-4 col-md-3">
              <div className="card">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Test
