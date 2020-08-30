import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarOne.scss';

const NavbarOne = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/iphone">
                    <ion-icon name="logo-apple"></ion-icon>
                </Link>
            </nav>
        </div>
    );
};

export default NavbarOne;
