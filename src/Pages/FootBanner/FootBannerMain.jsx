import React from 'react'
import './footbanner.css'

function FootBannerMain() {
    return (
        <div>
            <div className="container-fluid footbanParent">
                <div className="row">
                    <div className="col-md-6">
                        <img src={require('./../../Images/women sneakers.webp')} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-6">
                        <img src={require('./../../Images/fashion-shoes-sneaker.jpg')} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FootBannerMain
