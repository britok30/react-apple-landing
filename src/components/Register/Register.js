import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal';
import { Link, useHistory } from 'react-router-dom';
import fire from '../../fire';
import { useToasts } from 'react-toast-notifications';
import './Register.scss';

const Register = () => {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { addToast } = useToasts();
    const history = useHistory();

    const clearInputs = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        clearErrors();

        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                addToast('Sign Up Successful!', {
                    appearance: 'success',
                    autoDismiss: true,
                });

                history.push('/');
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        addToast(err.message, {
                            appearance: 'error',
                            autoDismiss: true,
                        });
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        addToast(err.message, {
                            appearance: 'error',
                            autoDismiss: true,
                        });
                        break;
                    default:
                        console.log(err);
                }
            });
    };

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
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
        <div className="register__container -outer">
            <Fade bottom duration={5000} distance="20px">
                <div className="register__container -inner">
                    <form
                        className="form"
                        autoComplete="off"
                        onSubmit={handleSignUp}
                    >
                        <h2 className="header">Sign-Up</h2>
                        <div>
                            <label htmlFor="user">Full Name</label>
                            <input
                                required
                                autoComplete="off"
                                name="user"
                                type="text"
                                value={name}
                                className="register-input"
                                placeholder="John Doe"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                autoComplete="off"
                                name="email"
                                type="email"
                                value={email}
                                className="register-input"
                                placeholder="user@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className="errorMsg">{emailError}</p>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                required
                                autoComplete="off"
                                type="password"
                                className="register-input"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="errorMsg">{passwordError}</p>
                        </div>
                        <button
                            className="btn btn-dark register-btn"
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

                <div className="sign-up">
                    Already registered? <Link to="/">Log In</Link>
                </div>
            </Fade>
        </div>
    );
};

export default Register;
