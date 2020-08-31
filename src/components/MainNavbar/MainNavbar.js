import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavbar.scss';
import fire from '../../fire';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const MainNavbar = () => {
    const history = useHistory();

    const handleLogOut = () => {
        fire.auth().signOut();
    };

    const { addToast } = useToasts();

    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <Link class="navbar-brand" to="/comingsoon">
                    <ion-icon name="logo-apple"></ion-icon>
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <Link class="nav-link" to="/iphone">
                            iPhone
                        </Link>
                        <Link class="nav-link" to="/macbook">
                            Macbook Pro
                        </Link>
                        <Link class="nav-link" to="/watch">
                            Watch
                        </Link>
                        <button class="btn btn-primary notify-btn">
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
                            class="btn btn-dark logout-btn"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MainNavbar;
