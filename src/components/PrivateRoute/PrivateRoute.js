import React, { useState, useEffect } from 'react';
import { Redirect, Route, useLocation, useHistory } from 'react-router-dom';
import fire from '../../fire';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    const [user, setUser] = useState('');
    const history = useHistory();
    const location = useLocation()

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                let currentPathname = location.pathname;
                if (currentPathname === '/' || currentPathname === '/signup') {
                    history.push('/home');
                }
            } else {
                setUser('');
                history.push('/')
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
