import React from 'react'
import "../App.scss"
import "../assets/sass/Contact/Contact.scss"
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
// import { Offices } from '../components/Offices'

export const Contact = () => {
    return (
        <div>
            {/* ====================== !!!!!HEAD/MAIN DARK AREA!!!!! ============================== */}
            <div>
                <Navbar />
            </div>

            <div className="bgColorLightWork">
                <section className="ContactArea">
                    {/* ===================== LEFT AREA =============================== */}
                    <div className="leftAreaContact">
                        <img src="/img/Contact-Header.jpg" alt="" />
                    </div>
                    {/* ===================== RIGHT AREA =============================== */}
                    <div className="rightAreaContact">
                        <h1>B®/ <br /> CONTACT</h1>
                        <p className="easy">EASY TO UNDERSTAND. IMPOSSIBLE TO IGNORE.™ BASIC®, INC 10 - 20©</p>
                        {/* ==================================================== */}
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
                {/* ==================================================== */}
                <div className="OfficeArea">
                    <div>
                        <ul className="OfficeHeader">
                            <li>SEC.</li>
                            <li>/A</li>
                            <li>●</li>
                        </ul>
                    </div>

                    {/* <Offices /> */}

                    <div className="OfficeGrid">
                        <div className="OfficeLeft">
                            <h2>OFFICES</h2>
                            <div className="line"></div>
                        </div>

                        <div className="Office1">
                            <img src="/img/SD.jpg" alt="Office Picture" />
                            <p>01 <span className="toRight">/03</span></p>
                        </div>

                        <div className="Office2">
                            <img src="/img/mtv.jpg" alt="Office Picture" />
                            <p>02 <span className="toRight">/03</span></p>
                        </div>

                        <div className="Office3">
                            <img src="/img/Stl.jpg" alt="Office Picture" />
                            <p>03 <span className="toRight">/03</span></p>
                        </div>

                        <div className="Header1">
                            <h3>SAN DIEGO (HQ)</h3>
                        </div>

                        <div className="Header2">
                            <h3>BAY AREA</h3>
                        </div>

                        <div className="Header3">
                            <h3>ST. LOUIS</h3>
                        </div>
                    </div>
                </div>

            </div>

            {/* ====================== !!!!!FOOTER DARK AREA!!!!! ============================== */}
            <div className="bgColorDark">
                <Footer />
            </div>

        </div>
    )
}