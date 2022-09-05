import React from "react";
import Vimage from "../images/food-image1.jpg";

const Vendors = () => {
    return (
        <div className="vendors">
            <h2 className="places__head features__head">Become a Partner</h2>
            <div className="vendors__content">
                <div className="vendors__image">
                    <img src= {Vimage} alt= "vendors image" />
                </div>
                <div className="vendors__text-box">
                    <div className="vendors__step">
                        <div>1</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    
                    <div className="vendors__step">
                        <div>2</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    
                    <div className="vendors__step">
                        <div>3</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>

                    <a href="#" className="btn btn--full vendors__sign">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Vendors;