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
                            <li className="li1">SEC.</li>
                            <li className="li2">/A</li>
                            <li className="li3">●</li>
                        </ul>
                    </div>

                    {/* <Offices /> */}

                    <div className="OfficeGrid">
                        <div className="OfficeLeft">
                            <h2>OFFICES</h2>
                            <div className="line"></div>
                        </div>

                        <div className="Office1">
                            <img src="/img/SD.jpg" alt="Office" />
                            <p>01 <span className="toRight">/03</span></p>
                        </div>

                        <div className="Office2">
                            <img src="/img/mtv.jpg" alt="Office" />
                            <p>02 <span className="toRight">/03</span></p>
                        </div>

                        <div className="Office3">
                            <img src="/img/Stl.jpg" alt="Office" />
                            <p>03 <span className="toRight">/03</span></p>
                        </div>

                        <div className="Header1">
                            <h3>SAN DIEGO (HQ)</h3>
                        </div>

                        <div className="Header2">
                            <h3>BAY AREA</h3>
                        </div>

                        <div className="Header3">
                            <h3>ST.LOUIS</h3>
                        </div>
                    </div>
                </div>
                {/* ====================== END OF OFFICE AREA============================== */}

                {/* ======================== FOLLOW ============================ */}

                <div className="FollowArea">
                    <div>
                        <ul className="FollowHeader">
                            <li className="li1">SEC.</li>
                            <li className="li2">/B</li>
                            <li className="li3">●</li>
                        </ul>
                    </div>

                    <section className="Follow">
                        <div className="li1">
                            <h2>FOLLOW</h2>
                        </div>

                        <div>
                            <ul className="contact_info">
                                <h3 className="contact_header">⚪️Social</h3>
                                <li>Instagram </li>
                                <li>Twitter</li>
                                <li>Linkedin</li>
                                <li>Facebook</li>
                            </ul>
                        </div>

                        <div className="xy">
                            <h6>⚪️ STAY IN THE KNOW</h6>
                            <p>Email Address</p>
                            <input type="email" name="email" id="email" />
                        </div>
                    </section>




                </div>

                {/* ====================== !!!!!FOOTER DARK AREA!!!!! ============================== */}
            </div>
            <div className="bgColorDark">
                <Footer />
            </div>
        </div>
    )
}