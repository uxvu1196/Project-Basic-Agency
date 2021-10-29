import React from 'react'
import { Features } from '../components/FeaturedEngagement'
import { FeaturedNews } from '../components/FeaturedNews'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'


export const Home = () => {
    return (
        <div>
            <Navbar />
            <section>
                <h2>WHAT’S NEXT <br /> STARTS</h2>
                <h2>●HERE</h2>
                <video src="/img/video/Hero.mp4" width="500px" controls autoPlay="autoplay"></video>
                <p>STRATEGY, DESIGN, TECHNOLOGY</p>

                <div>
                    <p>BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</p>
                    <img src="/img/svg/branding-img.svg" alt="" className="LogoBasic" />
                </div>
                <button>SEE THE WORK</button>

                <section>
                    <h3>FEATURED <br /> ENGAGEMENTS</h3>
                    <Features />
                </section>

                <section>
                    <h3>FEATURED <br /> NEWS</h3>
                    <FeaturedNews />
                </section>
            </section>
            <Footer />
        </div>
    )
}
/*






GOOGLE
Our embedded partnership with Google is as deep as it gets.We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.
    PATAGONIA
Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand - led programs and platforms.

Inhalt (index):

AIRBNB
Helping the world’s leading peer-to-peer hospitality company with creative vision, experience strategy, and execution in partnership with various departments and divisions internally at Airbnb.
HERMAN MILLER
A collaborative and performance incentivized partnership with our teams working side by side to reimagine the digital shopping experiences for Herman Miller, Design Within Reach, and Hay.
UNDER ARMOUR
Strategy, design, and development to differentiate the iconic brand’s direct-to-consumer experience through an all new omnichannel approach, global eCommerce
BASIC® HELPS BRANDS ●CONNECT
W/ CULTURE
ADWEEK (AGENCY SPOTLIGHT)
About us
FEATURED
NEWS
BASIC® Deemed One of the World’s Fastest Growing Agencies by Adweek
PRESS 09.25.19

 */
