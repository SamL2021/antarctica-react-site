import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="cards">
            <h1>Explore our trip below!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Our First zodiac trip, officially putting boots on Antarctica"
                            label="Adventure"
                            path="/the-journey"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Leopard seal spotted from our balcony before breakfast"
                            label="Wildlife"
                            path="/the-journey"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            text="Giant ice bergs in the Southern Ocean"
                            label="Adrenaline"
                            path="/the-journey"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Thousands of King penguins in South Georgia"
                            label="Wildlife"
                            path="/the-journey"
                        />
                        <CardItem
                            src="images/img-5.jpg"
                            text="Private balcony views and 6 star luxury cruising"
                            label="Luxury"
                            path="/the-ship"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
