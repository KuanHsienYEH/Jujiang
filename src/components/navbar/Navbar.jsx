import React, { useState, useEffect } from 'react';
import './navbar.css';

function Nav() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                setIsNavbarVisible(true);
            } else {
                setIsNavbarVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`${!isNavbarVisible ? "hidden" : ""}`}>
            <nav>
                <ul className="btngroup">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Expenience</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;