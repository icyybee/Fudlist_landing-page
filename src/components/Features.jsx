import React from "react"; 
import Delivery from "../images/Delivering.svg";
import Payment from "../images/Payment.svg";
import Preparing from "../images/Preparing.svg";

const Features = () => {
    return (
        <div className="features">
            <h2 className="places__head features__head">Our Services</h2>
            <div className="features__content">
                <div className="features__box">
                    <div className="features__sect">
                        <img src= {Preparing} alt= "phone svg" />
                    </div>
                    <div className="features__info">
                        <span className="features__title">Find your comfort food here</span>
                        <span className="features__text">Easily find and order any food you fancy from the comfort of your home</span>
                    </div>
                </div>

                <div className="features__box">
                    <div className="features__sect">
                        <img src= {Delivery} alt= "delivery svg" />
                    </div>
                    <div className="features__info">
                        <span className="features__title">Fast Delivery</span>
                        <span className="features__text">Enjoy a faster than light food delivery service</span>
                    </div>
                </div>
                <div className="features__box">
                    <div className="features__sect">
                        <img src= {Payment} alt= "card svg" />
                    </div>
                    <div className="features__info">
                        <span className="features__title">Convenient Payment Method</span>
                        <span className="features__text">Conveniently pay for your orders in app or with cash on delivery</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;