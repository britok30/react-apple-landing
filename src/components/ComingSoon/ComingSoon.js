import React from 'react';
import NavbarOne from '../NavbarOne/NavbarOne';
import './ComingSoon.scss';
import apple from '../../images/apple.png';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import CountUp from 'react-countup';

// import fire from '../../fire';
// import { useHistory } from 'react-router-dom';
// import { useToasts } from 'react-toast-notifications';

const Home = () => {
    return (
        <div>
            <NavbarOne />
            <div className="container home__container -outer">
                <div className="home__container -inner">
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
                    start={1990}
                    end={2020}
                    duration={5}
                />
            </div>
        </div>
    );
};

export default Home;

//   <button
//       onClick={() => {
//           handleLogOut();

//           addToast(`Logged out`, {
//               appearance: 'success',
//               autoDismiss: true,
//           });

//           history.push('/');
//       }}
//   >
//       logout
//   </button>;
