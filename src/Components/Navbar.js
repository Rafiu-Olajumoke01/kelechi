import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
    return (
        <nav className=''>
            <Link className="navbar_brand" to="/">
                <img src={require("./../Images/simple-shoe-shop-logo-in-line-style-vector.png")} alt="" />
            </Link>

            <div className="pages">
                <ul className="navbar_links">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>

                    <li>
                        <Link to="/about">ABOUT US</Link>
                    </li>

                    <li>
                        <Link to="/products">PRODUCTS</Link>
                    </li>

                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>

            <div className="cartItems">
                <div className="cart">
                    <Link to="/cart" >
                        <MdOutlineShoppingCart size="24" />
                    </Link>
                    <span>0</span>
                </div>


                <div className="search">
                    <MdSearch size={25} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
