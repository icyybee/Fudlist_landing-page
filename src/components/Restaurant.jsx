import React from "react"; 
import Burger from "../images/burger.jpeg";
import Chicken from "../images/chicken.jpeg";
import Ice from "../images/ice.jpeg";
import Pizza from "../images/pizzeria.jpeg";
import Rice from "../images/rice.jpeg";
import Shawarma from "../images/shawarma.jpeg";
import Bread from "../images/bread.jpeg";
import Pasta from "../images/pasta.jpeg";


const Restaurant = () => {
    return (
        <div className="places">
            <h2 className="places__head">Top Foods in Fudlist</h2>
            <div className="places__box">
                <div className="places__item">
                    <div>
                        <img src= {Burger} alt= "" />
                        <figcaption className="places__caption">Burger</figcaption>
                    </div>
                </div>

                <div className="places__item places__item--2">
                    <div>
                        <img src= {Chicken} alt= "" />
                        <figcaption className="places__caption">Chicken</figcaption>
                    </div>
                </div>

                <div className="places__item">
                    <div>
                        <img src= {Ice} alt= "" />
                        <figcaption className="places__caption">Ice cream</figcaption>
                    </div>
                </div>

                <div className="places__item">
                    <div>
                        <img src= {Pizza} alt= "" />
                        <figcaption className="places__caption">Pizza</figcaption>
                    </div>
                </div>

                <div className="places__item  places__item--5">
                    <div>
                        <img src= {Rice} alt= "" />
                        <figcaption className="places__caption">Rice</figcaption>
                    </div>
                </div>

                <div className="places__item">
                    <div>
                        <img src= {Shawarma} alt= "" />
                        <figcaption className="places__caption">Shawarma</figcaption>
                    </div>
                </div>

                <div className="places__item">
                    <div>
                        <img src= {Bread} alt= "" />
                        <figcaption className="places__caption">Bread</figcaption>
                    </div>
                </div>

                <div className="places__item">
                    <div>
                        <img src= {Pasta} alt= "" />
                        <figcaption className="places__caption">Pasta</figcaption>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;