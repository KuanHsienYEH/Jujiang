import React, {useState, useEffect} from 'react';
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
            <img className="nav-logo" src={logo} alt="logo"/>
                <ul className="btngroup">
                    <li><a className="career">最新職缺</a></li>
                    <li><a className="about-us">關於巨將</a></li>
                    <li><a className="contact-us">聯絡巨將</a></li>
                    <li><a className="lang">繁體中文</a></li>
                </ul>
        </div>
    );
}

export default Nav;