import React, { useState } from 'react';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login__container -outer">
            <Fade bottom duration={5000} distance="20px">
                <div className="login__container -inner">
                    <form className="form" autoComplete="off">
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
                        </div>
                        <button className="btn btn-dark login-btn">
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
