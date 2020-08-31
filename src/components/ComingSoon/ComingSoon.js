import React from 'react';
import SecondaryNavbar from '../SecondaryNavbar/SecondaryNavbar';
import './ComingSoon.scss';
import apple from '../../images/apple.png';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import CountUp from 'react-countup';

const Home = () => {
    return (
        <div>
            <SecondaryNavbar />
            <div className="container cs__container -outer">
                <div className="cs__container -inner">
                    <Fade top duration={5000} distance="100px">
                        <Link to="/home">
                            <img className="logo" src={apple} alt="logo" />
                        </Link>
                    </Fade>
                </div>
                <Fade bottom cascade duration={5000} distance="50px">
                    <h2 className="new-products">
                        New Products Coming This Summer
                    </h2>
                </Fade>
                <CountUp
                    className="counter"
                    start={1976}
                    end={2020}
                    duration={6}
                />
            </div>
        </div>
    );
};

export default Home;
