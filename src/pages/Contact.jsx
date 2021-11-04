import React from 'react'
import "../App.scss"
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'

export const Contact = () => {
    return (
        <div>
            <div className="bgColorLight">
                <Navbar />
                {/* <section className="firstArea">
                    <h2 className="whatsNext">WHAT’S NEXT <br /> STARTS</h2>
                    <h2 className="here">●HERE</h2>
                    <video src="/img/video/Hero.mp4" controls autoPlay="autoplay"></video>
                    <p >STRATEGY, DESIGN, TECHNOLOGY</p>
                </section>


                <div className="secondArea">
                    <p>BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</p>
                    <img src="/img/svg/branding-img.svg" alt="" className="LogoBasic" />
                </div>
                <button>SEE THE WORK</button>

                <section className="thirdArea">
                    <h3>FEATURED <br /> ENGAGEMENTS</h3>
                </section> */}

            </div>
            <div className="bgColorDark">
                <Footer />
            </div>
        </div>
    )
}
