import React from "react"; 
import Logo from "../images/logo.jpeg";
import SVG from "../components/Svg";
 

const Navigation = () => {
    return (
        <nav className="nav">
            <div className="nav__logo-box">
                <img src= {Logo} className="nav__logo" alt="logo" />
            </div>

            <div className="nav__navi">
                <ul>
                    <li>
                        <a href="#" className="btn btn--full">
                            <SVG />Log In
                        </a>
                    </li>
                </ul>        
            </div>

        </nav>
    )
}

export default Navigation;