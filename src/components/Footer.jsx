import React from "react";
import Flogo from "../images/favicon.jpeg";
import Facebook from "../images/facebook.svg"; 
import Twitter from "../images/twitter.svg"; 
import Instagram from "../images/instagram.svg"; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src= {Flogo} alt="footer-logo" />
            </div>
            <p>&copy; 2022 Fudlist</p>
            <div className="footer__link">
                <a href="#">
                    <img src= {Facebook} alt= "facebook-link" />
                </a>

                <a href="https://www.instagram.com/fudlist.ng/">
                    <img src= {Instagram} alt= "Instagram-link" />
                </a>

                <a href="https://mobile.twitter.com/fudlistng">
                    <img src= {Twitter} alt= "twitter-link" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;