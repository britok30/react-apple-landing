import React from 'react';
import Fade from 'react-reveal';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found__container">
            <Fade bottom cascade duration={5000} distance="20px">
                <h3 className="header">404: Page Not Found</h3>
            </Fade>
        </div>
    );
};

export default NotFound;
