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
                            <img className="logo" src={apple} alt="logo" />
                        </Fade>
                    </div>
                    <Fade bottom cascade duration={5000} distance="50px">
                        <h1 className="welcome">Welcome to Apple</h1>
                    </Fade>

                    <Link className="products" to="/iphone">
                        <Fade bottom>See Our Products </Fade>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
