import React from 'react';
import './Home.scss';
import MainNavbar from '../MainNavbar/MainNavbar';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';
import apple from '../../images/apple.png';
import iphonelogo from '../../images/iphone.jpg';
import macbooklogo from '../../images/macbook.svg';
import watchlogo from '../../images/iwatch.png';

import './Home.scss';

const Home = () => {
    return (
        <div>
            <MainNavbar />
            <div className="container home__container -outer">
                <div className="home__container -inner">
                    <Fade top duration={5000} distance="100px">
                        <img className="logo" src={apple} alt="logo" />
                    </Fade>
                </div>
                <Fade bottom cascade duration={5000} distance="50px">
                    <h1 className="welcome">Welcome to Apple</h1>
                </Fade>

                <Link className="products" to="#">
                    <Fade bottom>See Our Products </Fade>
                </Link>
                <div>
                    <Fade bottom cascade>
                        <ul>
                            <li>
                                <Link to="/iphone">
                                    <img
                                        className="iphone-logo"
                                        src={iphonelogo}
                                        alt="iphonelogo"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/macbook">
                                    <img
                                        className="macbook-logo"
                                        src={macbooklogo}
                                        alt="macbooklogo"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="/watch">
                                    <img
                                        className="watch-logo"
                                        src={watchlogo}
                                        alt="watchlogo"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Home;
