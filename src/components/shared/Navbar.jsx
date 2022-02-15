import React, {useState, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../../styles/shared/Navbar.css';
import logo from '../../common/images/logo.png';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return(
        <div className={`nav ${show && "nav-scroll"}`}>
            <Link to="/"><img className="nav-logo" src={logo} alt="logo"/></Link>
                <nav>
                    <ul className="btngroup">
                        <li><Link to="/react">react</Link></li>
                        <li><Link to="/algorithm">algorithm</Link></li>
                        <li><Link to="/js">js</Link></li>
                        <li><Link to="/about">about</Link></li>
                    </ul>
                </nav>
        </div>
    );
}

export default Nav;