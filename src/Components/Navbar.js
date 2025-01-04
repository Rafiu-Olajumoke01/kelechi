import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { MdSearch } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
    return (
        <nav>
            <div className="navbar_brand">
                <img src={require("./../Images/NovahkayLogo-removebg-preview.png")} alt="" />
            </div>

            <div className="pages">
                <ul className="navbar_links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About Us</Link>
                    </li>

                    <li>
                        <Link to="/products">Products</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="cartItems">
                <Link to="/cart">
                    <MdOutlineShoppingCart size="24" />
                </Link>
                <span>0</span>


                <div className="search">
                    <MdSearch size={25} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
