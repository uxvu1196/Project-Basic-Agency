import React from 'react'
import "../App.scss"
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import "../assets/sass/Contact/Contact.scss"

export const Contact = () => {
    return (
        <div>
            <div className="bgColorLightWork">
                <Navbar />
                <section className="ContactArea">
                    <div className="leftAreaContact">
                        <img src="/img/Contact-Header.jpg" alt="" />
                    </div>

                    <div className="rightAreaContact">
                        <h1>B®/ <br /> CONTACT</h1>
                        <p className="easy">EASY TO UNDERSTAND. IMPOSSIBLE TO IGNORE.™ BASIC®, INC 10 - 20©</p>

                        <div className="contactMails">
                            <div>
                                <h2>●</h2>
                            </div>
                            <div className="contactGrid">
                                <div>
                                    <h5>NEWS BUSINESS</h5>
                                    <p id="email">hi@mail.com</p>
                                </div>
                                <div>
                                    <h5>GENERAL</h5>
                                    <p id="email">hi@mail.com</p>
                                </div>
                                <div>
                                    <h5>PRESS</h5>
                                    <p id="email">hi@mail.com</p>
                                </div>
                                <div>
                                    <h5>JOIN US</h5>
                                    <p id="email">hi@mail.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <div className="bgColorDark">
                <Footer />
            </div>

        </div>
    )
}