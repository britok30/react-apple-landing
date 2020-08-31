import React, { useState, useEffect } from 'react';
import MainNavbar from '../../components/MainNavbar/MainNavbar';
import apple from '../../images/logogrey.svg';
import Fade from 'react-reveal';
import appleWatch from '../../images/Black Watch-1@2x.png';
import axios from 'axios';
import './Watch.scss';

const Watch = () => {
    const [date, setDate] = useState('');

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
                    <h2 className="watch__title -red">Apple Watch</h2>
                    <h1 className="watch__title -main">The ultimate iPhone</h1>
                    <p className="watch__description">
                        The future is here. Join the iPhone Upgrade Program to
                        get the latest iPhone - NOW!
                    </p>
                    <p className="watch__date -red">{`Start shipping ${date}`}</p>
                </Fade>
            </div>

            <div className="main-image">
                <Fade right duration={3000} distance="20px">
                    <img
                        className="watch-black"
                        src={appleWatch}
                        alt="watchBlack"
                    />
                </Fade>
            </div>

            <div className="price">
                <h2 className="watch__price">From $699</h2>
                <p className="watch__buy">Buy Now &#62; </p>
            </div>

            <div className="display-phones">
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Watch;
