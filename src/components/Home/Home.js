import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Fade from 'react-reveal';

// import fire from '../../fire';
// import { useHistory } from 'react-router-dom';
// import { useToasts } from 'react-toast-notifications';

const Home = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/iphone">
                    <Fade bottom duration={5000} distance="20px">
                        <ion-icon name="logo-apple"></ion-icon>
                    </Fade>
                </Link>
            </nav>
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
