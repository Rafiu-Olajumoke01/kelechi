import React from 'react'
import Navbar from './../../Components/Navbar'

function Cart() {
    return (
        <div>
            <div className=''>
                <Navbar />
            </div>

            <div className="cartBox">
                <div className="yourcart">
                    <h2>YOUR CART</h2>
                    <p>your cart is currently empty</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
