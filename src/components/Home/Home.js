import React from 'react';
import fire from '../../fire';

const Home = () => {
    const handleLogOut = () => {
        fire.auth().signOut();
    };

    return <div>Home</div>;
};

export default Home;
