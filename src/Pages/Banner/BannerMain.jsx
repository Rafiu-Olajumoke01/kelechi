import React from 'react'
import './banner.css'
function BannerMain() {
  return (
    <div>
      <div className="container-fluid Banner">
        <div className="row">
          <div className="col-md-6 imageContainer">
            <img src={require("./../../Images/women sneakers.webp")} alt="" className='img-fluid' />
          </div>

          <div className="col-md-6 imageContainer">
            <img src={require("./../../Images/fashion-shoes-sneaker.jpg")} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default BannerMain
