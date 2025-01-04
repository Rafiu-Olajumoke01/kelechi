import React from 'react'
import './home.css'
function HomeMain() {
    return (
        <div>
            <div className="container-fluid Banner">
                <div className="row">
                    <div className="col-md-6">
                        <img src={require("./../../Images/asset3.jpg")} alt="" className='img-fluid' />
                    </div>

                    <div className="col-md-6">
                        <img src={require("./../../Images/asset4.jpg")} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain
