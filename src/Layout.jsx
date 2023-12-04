import React from 'react'
import Content from "./components/content/Content"
import Footer from "./components/footer/Footer"
import Navbar from "./components/header/Navbar"
const Layout = () => {
    return (
        <div>
            <div className="top-0 fixed w-full bg-white">
                <Navbar />
            </div>
            <div className="bg-[#f9f9f9]">
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default Layout