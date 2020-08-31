import React from 'react';
import { Link } from 'react-router-dom';
import './SecondaryNavbar.scss';

const SecondaryNavbar = () => {
    return (
        <div>
            <nav className="nav__container">
                <Link className="brand" to="/home">
                    <ion-icon name="logo-apple"></ion-icon>
                </Link>
            </nav>
        </div>
    );
};

export default SecondaryNavbar;
