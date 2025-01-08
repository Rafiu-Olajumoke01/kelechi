import React from 'react'
import './footbanner.css'

function FootBannerMain() {
    return (
        <div>
            <div className="container-fluid footbanParent">
                <div className="row">
                    <div className="col-md-6">
                        <img src={require('./../../Images/IMG-20250107-WA0057.jpg')} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-6">
                        <img src={require('./../../Images/IMG-20250107-WA0065.jpg')} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FootBannerMain
