import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { button } from "./Button";
import "./NavBar.css";
// import logoImg from "./../Assets/img/penguin-logo.png";

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Reverses state on click from cross to bars
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // useEffect(() => {
    //     showButton();
    // }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container"></div>

                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    ANTARCTICA
                    {/* <img src={logoImg} alt="Penguin" /> */}
                    {/* <i className="fab fa-typo3" /> */}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/the-journey"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Journey
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/the-ship"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Ship
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/book-now"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >
                            Book
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link
                            to="/sign-up"
                            className="nav-links-mobile"
                            onClick={closeMobileMenu}
                        >
                            Sign up
                        </Link>
                    </li> */}
                </ul>
                {/* {Button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
            </nav>
        </>
    );
}

export default NavBar;
