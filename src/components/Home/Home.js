import React from 'react';
import NavbarOne from '../NavbarOne/NavbarOne';
import './Home.scss';
import apple from '../../images/apple.png';

// import fire from '../../fire';
// import { useHistory } from 'react-router-dom';
// import { useToasts } from 'react-toast-notifications';

const Home = () => {
    return (
        <div>
            <NavbarOne />
            <div className="container home__container -outer">
                <div className="home__container -inner">
                    <img className="logo" src={apple} alt="logo" />
                </div>
                <h2 className="new-products">
                    New Products Coming This Summer
                </h2>
                <p>2020</p>
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
