import React from 'react';
import fire from '../../fire';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const Home = () => {
    const { addToast } = useToasts();
    const history = useHistory();

    const handleLogOut = () => {
        fire.auth().signOut();
    };

    return (
        <div>
            Home
            <button
                onClick={() => {
                    handleLogOut();

                    addToast(`Logged out`, {
                        appearance: 'success',
                        autoDismiss: true,
                    });
                    
                    history.push('/');
                }}
            >
                logout
            </button>
        </div>
    );
};

export default Home;
