import React, { useState, useEffect } from 'react';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import apple from '../../images/logogrey.svg';
import Fade from 'react-reveal';
import appleWatch from '../../images/Black Watch-1@2x.png';
import appleWatchWhite from '../../images/White Watch-2@2x.png';
import axios from 'axios';

import { Link } from 'react-router-dom';
import iphonelogo from '../../images/iphone.jpg';
import macbooklogo from '../../images/macbook.svg';
import watchlogo from '../../images/iwatch.png';
import './Watch.scss';

const watches = { appleWatch, appleWatchWhite };

const Watch = () => {
    const [date, setDate] = useState('');
    const [selected, setSelected] = useState(watches.appleWatch);

    const getDate = async () => {
        const url =
            'https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates';

        const data = await axios
            .get(url)
            .then((res) => {
                setDate(res.data.watch);
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
            <MainNavbar watch="active" />
            <div className="container iphone__container -outer">
                <div className="iphone__container -inner">
                    <img className="logo" src={apple} alt="logo" />
                </div>
            </div>

            <div className="description">
                <Fade bottom cascade duration={3000} distance="20px">
                    <div className="content-container">
                        <h2 className="watch__title -red">Apple Watch</h2>
                        <h1 className="watch__title -main">
                            Change starts within
                        </h1>
                        <p className="watch__description">
                            Apple Watch Series 4. Fundamentally redesigned and
                            re-engineered to help you be even more active,
                            healthy, and connected.
                        </p>
                        <p className="watch__date -red">{`Starts shipping ${date}`}</p>
                    </div>
                </Fade>
            </div>

            <div className="main-image">
                <Fade right duration={3000} distance="20px">
                    <img
                        className="watch-black"
                        src={selected}
                        alt="watchBlack"
                    />
                </Fade>
            </div>

            <div className="price">
                <Fade left cascade duration={5000} distance="20px">
                    <h2 className="watch__price">From $699</h2>
                    <p className="watch__buy">Buy Now &#62; </p>
                </Fade>
            </div>

            <div className="display-watch">
                <div className="white">
                    <ion-icon
                        onClick={() => {
                            setSelected(watches.appleWatchWhite);
                        }}
                        className="w-circle"
                        name="ellipse-outline"
                    ></ion-icon>
                    <p>White</p>
                </div>
                <div className="black">
                    <ion-icon
                        onClick={() => {
                            setSelected(watches.appleWatch);
                        }}
                        className="b-circle"
                        name="ellipse"
                    ></ion-icon>
                    <p>Black</p>
                </div>
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

export default Watch;
