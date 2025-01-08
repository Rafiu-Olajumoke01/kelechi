import React, { useEffect } from 'react'
import { allproducts } from '../ProductPage/ProductMain'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItemCart } from './../../store/cart/cartSlice'
import { removeItemCart } from './../../store/cart/cartSlice'

import './designs.css'

function DesignsMain() {
  const clothing = allproducts.filter(product => product.category === 'Clothing')

  // const cart = useSelector((state) => state.cart.cartItem)

  const dispatch = useDispatch()
  return (
    <div>
      <div className="container-fluid designParent">
        <div className="row designChild">
          {
            clothing.map(product => (
              <div key={product.id} className="col-sm-4 col-md-3 designChilds">
                <div className="">
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

                  <div className="cart">
                    <div className='btn ' onClick={() => dispatch(addItemCart(product))}>Add to Cart</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DesignsMain
