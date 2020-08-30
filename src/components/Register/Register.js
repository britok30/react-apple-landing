import React, { useState } from 'react';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="register__container-outer">
            <Fade bottom duration={5000} distance="20px">
                <div className="register__container-inner">
                    <form className="form" autoComplete="off">
                        <h2 className="header">Sign-Up</h2>
                        <div>
                            <label htmlFor="user">Full Name</label>
                            <input
                                required
                                name="user"
                                type="text"
                                value={user}
                                className="register-input"
                                placeholder="John Doe"
                                onChange={(e) => {
                                    setUser(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                name="email"
                                type="email"
                                value={email}
                                className="register-input"
                                placeholder="user@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                required
                                type="password"
                                className="register-input"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-dark register-btn">
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
