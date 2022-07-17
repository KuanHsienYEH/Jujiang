import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './navbar.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav-scroll"}`}>
            {/* <Link to="/"><img className="nav-logo" src={0} alt="logo" /></Link> */}
            <nav>
                <ul className="btngroup">
                    <li><Link to="/portfolio">About me</Link></li>
                    <li><Link to="/works">Works</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;