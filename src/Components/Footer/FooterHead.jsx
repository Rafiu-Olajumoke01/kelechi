import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "./foot.css"
function FooterHead() {
  return (
    <div>
      <div className="foothead">
        <div className="footjoinsus">
          <div className="join">
            <h5>JOIN THE COMMUNITY</h5>
            <p>You Will Receive All The Information Regarding The Next Drops.</p>
          </div>

          <div className="emailAdd">
            <input type="email" placeholder='Email Address' />
            <button>SUBSCRIBE <FaLongArrowAltRight /></button>
          </div>

        </div>
      </div>

      <div className="footbody">
        <h5>FOLLOW US</h5>
        <div className="socialmedia">
          <Link to="#" className="social-link">
            <FaInstagram size={25} />
          </Link>

          <Link to="#" className="social-link">
            <FaWhatsapp size={25} />
          </Link>
        </div>
      </div>

      <div className="footEnd">
        <Link> @ 2025, SHOESHOP</Link>
      </div>
    </div>
  )
}

export default FooterHead
