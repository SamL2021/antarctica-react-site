import React from "react";
import { button } from "./button";
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}

            <h1>ICY ADVENTURES</h1>
            <div className="hero-btns">
                <button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH VIDEO
                    <i className="far fa-play-circle" />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
