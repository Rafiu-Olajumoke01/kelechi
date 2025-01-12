import React from 'react'
import BannerPage from './../Banner/Index'
import DesignsPage from '../DesignsPage/Index'
import './home.css'
import FootBannerPage from '../FootBanner/Index'
import Footer from './../../Components/Footer/Index'
function HomeMain() {
    return (
        <div>
            <div className="banner">
                <BannerPage />
            </div>

            <div className="design">
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
