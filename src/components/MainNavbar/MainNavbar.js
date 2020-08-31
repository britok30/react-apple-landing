import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import fire from '../../fire';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const MainNavbar = ({ iphone, macbook, watch }) => {
    const history = useHistory();

    const handleLogOut = () => {
        fire.auth().signOut();
    };

    const { addToast } = useToasts();

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/comingsoon">
                    <ion-icon name="logo-apple"></ion-icon>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${iphone}`}>
                            <Link className="nav-link" to="/iphone">
                                iPhone
                            </Link>
                        </li>
                        <li className={`nav-item ${macbook}`}>
                            <Link className="nav-link" to="/macbook">
                                Macbook Pro
                            </Link>
                        </li>
                        <li className={`nav-item ${watch}`}>
                            <Link className="nav-link" to="/watch">
                                Watch
                            </Link>
                        </li>
                        <button className="btn btn-primary notify-btn">
                            Notify Me
                        </button>
                        <button
                            onClick={() => {
                                handleLogOut();

                                addToast(`Logged out`, {
                                    appearance: 'success',
                                    autoDismiss: true,
                                });

                                history.push('/');
                            }}
                            className="btn btn-dark logout-btn"
                        >
                            Log Out
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MainNavbar;
