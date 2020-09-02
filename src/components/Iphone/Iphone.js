import React, { useState, useEffect } from 'react';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import apple from '../../images/logogrey.svg';
import Fade from 'react-reveal';
import mainIphone from '../../images/Iphone 1@2x.png';
import axios from 'axios';
import './Iphone.scss';

import { Link } from 'react-router-dom';
import iphonelogo from '../../images/iphone.jpg';
import macbooklogo from '../../images/macbook.svg';
import watchlogo from '../../images/iwatch.png';

const Iphone = () => {
    const [date, setDate] = useState('');

    const getDate = async () => {
        const url =
            'https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates';

        const data = await axios
            .get(url)
            .then((res) => {
                setDate(res.data.iphone);
            })
            .catch((err) => {
                console.log(err);
            });

        return data;
    };

    useEffect(() => {
        getDate();
    }, []);

    return (
        <div>
            <MainNavbar iphone="active" />
            <div className="container-fluid iphone__container -outer">
                <div className="iphone__container -inner">
                    <img className="logo" src={apple} alt="logo" />
                </div>
            </div>

            <div className="description">
                <Fade bottom cascade duration={3000} distance="20px">
                    <div className="content-container">
                        <h2 className="iphone__title -red">iPhone</h2>
                        <h1 className="iphone__title -main">
                            The ultimate iPhone
                        </h1>
                        <p className="iphone__description">
                            The future is here. Join the iPhone Upgrade Program
                            to get the latest iPhone - NOW!
                        </p>
                        <p className="iphone__date -red">{`Starts shipping ${date}`}</p>
                    </div>
                </Fade>
            </div>

            <div className="main-image">
                <Fade right duration={3000} distance="20px">
                    <img
                        className="iphone-gold"
                        src={mainIphone}
                        alt="mainIphone"
                    />
                </Fade>
            </div>

            <div className="price">
                <Fade left cascade duration={5000} distance="20px">
                    <h2 className="iphone__price">From $699</h2>
                    <p className="iphone__buy">Buy Now &#62; </p>
                </Fade>
            </div>

            <div className="iphone-list">
                <Fade right cascade>
                    <ul>
                        <li className="icon">
                            <Link to="/iphone">
                                <img
                                    className="iphone-logo"
                                    src={iphonelogo}
                                    alt="iphonelogo"
                                />
                            </Link>
                        </li>
                        <li className="icon">
                            <Link to="/macbook">
                                <img
                                    className="macbook-logo"
                                    src={macbooklogo}
                                    alt="macbooklogo"
                                />
                            </Link>
                        </li>
                        <li className="icon">
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
    );
};

export default Iphone;
