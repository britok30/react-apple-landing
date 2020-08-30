import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import fire from '../../fire';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('');
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
