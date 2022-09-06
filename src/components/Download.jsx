import React from "react";
import Google from "../images/google.png";
import Apple from "../images/apple.png";
import Phone1 from "../images/app-1.svg";
import Phone2 from "../images/app-2.svg";

const Download = () => {
    return (
        <div className="download">
            <div className="download__box">
                <div className="download__text">
                    With the Fudlist app, anyone can simply use a mobile device
                    to look over numerous delicacies. All you need to do is to
                    place an order, and pick up in-store or have it delivered to your
                    doorstep.
                </div>
                <div className="download__link">
                    <a href="https://www.instagram.com/fudlist.ng/">
                        <img src= {Google} alt= "google" className="link-img" />
                    </a>
                    <a href="https://www.instagram.com/fudlist.ng/">
                        <img src= {Apple} alt= "apple" />
                    </a>
                </div>
            </div>
            <div className="download__img">
                <img src= {Phone1} className= "phone-1 animate-1" alt="phone1"/>
                <img src= {Phone2}  className= "phone-2 animate-2" alt="phone2"/>
            </div>
        </div>
    )
}

export default Download;