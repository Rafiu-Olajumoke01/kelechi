import React from 'react'
import shortVideo from "./../../Images/shortvideo2.mp4"
import './banner.css'
function BannerMain() {
  return (
    <div>
      <div className="container-fluid Banner">
        <div className="row">
          <div className="col-md-6 imageContainer">
            <img src={require("./../../Images/IMG-20250107-WA0061.jpg")} alt="" className='img-fluid' />
          </div>

          <div className="col-md-6 imageContainer">
            <img src={require("./../../Images/IMG-20250107-WA0064.jpg")} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default BannerMain
