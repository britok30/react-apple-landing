import React from 'react';
import './Macbook.scss';
import MainNavbar from '../MainNavbar/MainNavbar';
import Fade from 'react-reveal';

const Macbook = () => {
    return (
        <div>
            <MainNavbar macbook="active" />
            <div className="macbook-text">
                <Fade bottom cascade duration={3000} distance="20px">
                    <h1 className="macbook__header">MacBook Pro</h1>
                </Fade>
            </div>
        </div>
    );
};

export default Macbook;
