import React from 'react';
import './Home.scss';
import MainNavbar from '../MainNavbar/MainNavbar';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';
import apple from '../../images/apple.png';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <div>
                <MainNavbar />
                <div className="container home__container -outer">
                    <div className="home__container -inner">
                        <Fade top duration={5000} distance="100px">
                            <Link to="/home">
                                <img className="logo" src={apple} alt="logo" />
                            </Link>
                        </Fade>
                    </div>
                    <Fade bottom cascade duration={5000} distance="50px">
                        <h1 className="welcome">
                            Welcome to Apple
                        </h1>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Home;
