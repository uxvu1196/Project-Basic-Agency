import { Link } from 'react-router-dom';
import React from 'react'
import "../assets/sass/Navigation/Navbar.scss"
import "../App.scss"
// import Logo from "/public/img/logo.svg"


const Navbar = () => {
    return (
        <div className="Nav">
            <nav>
                <Link to="/" className="Logo" >
                    <img src="/img/svg/logo.svg" alt="Logo" />
                </Link>
                <ul>
                    <li>
                        <Link className="link" to="/work">WORK</Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link className="link" to="/news">NEWS</Link>
                    </li>
                    <li>
                        <Link className="link" to="/thinking">THINKING</Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>
                </ul>
                <Link to="/" className="Dots" >
                    <img src="/img/svg/menu.svg" alt="Logo" />
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
