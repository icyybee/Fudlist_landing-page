import React from "react";
import Flogo from "../images/favicon.jpeg";
import Facebook from "../images/facebook.svg"; 
import Twitter from "../images/twitter.svg"; 
import Instagram from "../images/instagram.svg"; 

const Footer = () => {
    return (
        <footer>
            <div>
                <img src= {Flogo} className="footer__logo" alt="footer-logo" />
            </div>
            <p>&copy; 2022 Fudlist</p>
            <div className="footer__link">
                <a href="#">
                    <img src= {Facebook} />
                </a>

                <a href="#">
                    <img src= {Instagram} />
                </a>

                <a href="#">
                    <img src= {Twitter} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;