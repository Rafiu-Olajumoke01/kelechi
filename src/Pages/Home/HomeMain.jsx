import React from 'react'
import shortVideo from "./../../Images/shortvideo2.mp4"
import BannerPage from './../Banner/Index'
import DesignsPage from '../DesignsPage/Index'
import Test from './../Test'
import './home.css'
import FootBannerPage from '../FootBanner/Index'
import Footer from './../../Components/Footer/Index'
function HomeMain() {
    return (
        <div>
            <div className="banner mb-4">
                <BannerPage />
            </div>

            <div className="design mt-3">
                <DesignsPage />
            </div>

            <div className="design mt-5">
                <FootBannerPage/>
            </div>

            <div className="design">
                <Footer/>
            </div>
        </div>

    )
}

export default HomeMain
