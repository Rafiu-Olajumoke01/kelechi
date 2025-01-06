import React from 'react'
import shortVideo from "./../../Images/shortvideo2.mp4"
import BannerPage from './../Banner/Index'
import DesignsPage from '../DesignsPage/Index'
import Test from './../Test'
import './home.css'
function HomeMain() {
    return (
        <div>
            <div className="banner mb-4">
                <BannerPage />
            </div>

            <div className="design">
                <DesignsPage />
            </div>
        </div>

    )
}

export default HomeMain
