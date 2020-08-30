import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal';
import { Link, useHistory } from 'react-router-dom';
import fire from '../../fire';
import './Login.scss';

const Login = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    let history = useHistory();

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logged In');

        clearErrors();

        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                    default:
                        console.log('Error');
                }
            });
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className="login__container -outer">
            <Fade bottom duration={5000} distance="20px">
                <div className="login__container -inner">
                    <form
                        className="form"
                        autoComplete="off"
                        onSubmit={handleLogin}
                    >
                        <h2 className="header">Sign-In</h2>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                name="email"
                                type="email"
                                value={email}
                                className="login-input"
                                placeholder="user@email.com"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <p className="errorMsg">{emailError}</p>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                required
                                type="password"
                                className="login-input"
                                placeholder="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <p className="errorMsg">{passwordError}</p>
                        </div>
                        <button
                            className="btn btn-dark login-btn"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                <div className="sign-up">
                    Not registered? <Link to="/signup">Sign Up</Link>
                </div>
            </Fade>
        </div>
    );
};

export default Login;
