import React from "react";
import Navigation from "./Navigation";
import Google from "../images/google.png";
import Apple from "../images/apple.png";

const Header = () => {
    return (
        <header className="header">
            <Navigation />
            <div className="header__text-box">
                <div className="heading">
                    <h1>
                        Order Amazing Food Anywhere!
                    </h1>
                    <h2 className="heading-main">
                        from your favourite restaurants near you
                    </h2>
                    <p className="heading-sub">...available in Bayelsa State only</p>
                </div>
            </div>

            <div class="header__form download__link">
                <a href="#">
                    <img src= {Google} alt= "google" className="link-img" />
                </a>
                <a href="#">
                    <img src= {Apple} alt= "apple" />
                </a>    
            </div>
        </header>
    )
}


export default Header;