import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import Fade from 'react-reveal';
import './Watch.scss';

const Watch = () => {
    return (
        <div>
            <MainNavbar watch="active" />
            <div className="watch-text">
                <Fade top cascade duration={5000} distance="20px">
                    <h1 className="watch__header">Apple Watch</h1>
                </Fade>
            </div>
        </div>
    );
};

export default Watch;
