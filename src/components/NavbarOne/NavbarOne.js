import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarOne.scss';
import Fade from 'react-reveal';

const NavbarOne = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/iphone">
                    <Fade bottom duration={5000} distance="20px">
                        <ion-icon name="logo-apple"></ion-icon>
                    </Fade>
                </Link>
            </nav>
        </div>
    );
};

export default NavbarOne;
