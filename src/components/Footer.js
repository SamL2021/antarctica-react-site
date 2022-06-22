import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <div class="footer-links"></div>
            <section class="social-media">
                <div class="social-media-wrap">
                    <div class="footer-logo">
                        <Link to="/" className="social-logo">
                            BEYOND ADVENTURES
                            {/* <i class="fab fa-typo3" /> */}
                        </Link>
                    </div>
                    <small class="website-rights">S.LIPPIATT © 2022</small>
                    <div class="social-icons">
                        <Link
                            class="social-icon-link instagram"
                            to="https://www.instagram.com/awesomeadventurecouple"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class="fab fa-instagram" />
                        </Link>
                        <Link
                            class="social-icon-link youtube"
                            to="https://www.youtube.com/user/QueenKama"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i class="fab fa-youtube" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
