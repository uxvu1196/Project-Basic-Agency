import React from 'react'
import "../assets/sass/Footer/Footer.scss"

export const Footer = () => {
    return (
        <section>

            <div className="Footer_upper">

                <div className="leftArea">
                    <img src="/img/svg/footer-logo.svg" alt="Basic Logo" />
                    <h6>⚪️ STAY IN THE KNOW</h6>
                    <p>Email Address</p>
                    <input type="email" name="email" id="email" />
                </div>


                <div className="rightArea">
                    <h4>We collaborate with ambitious brands and people. <a href="/contact">Let’s connect :)</a></h4>

                    <div className="contact">

                        <ul className="contact_info">
                            <h3 className="contact_header">⚪️Social</h3>
                            <li>Instagram </li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                            <li>Facebook</li>
                        </ul>

                        <ul className="contact_info">
                            <h3 className="contact_header">⚪️INITIATIVES</h3>
                            <li>Crafted  </li>
                            <li>Culture Manual</li>
                            <li>Applied </li>
                            <li>Brandbeats</li>
                            <li>Moves</li>
                        </ul>

                        <ul className="contact_info">
                            <h3 className="contact_header">⚪️OFFICES</h3>
                            <li>San Diego – CA</li>
                            <li>Bay Area – CA</li>
                            <li>St. Louis – MO</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer_below">
                <p> BASIC®  INC 10 - 20©</p>
                <p>EASY TO UNDERSTAND  IMPOSSIBLE TO IGNORE.™</p>
                <p>TERMS  PRIVACY POLICY</p>
            </div>
        </section>
    )
}
