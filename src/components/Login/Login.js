import React from 'react';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    return (
        <div className="outer-container">
            <Fade bottom duration={5000} distance="20px">
                <div className="inner-container">
                    <form className="form" autoComplete="off">
                        <h2 className="input-header">Login</h2>
                        <div>
                            <label htmlFor="username">Email</label>
                            <input
                                required
                                name="username"
                                type="email"
                                className="login-input"
                                placeholder="user@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                required
                                type="password"
                                className="login-input"
                                placeholder="password"
                            />
                        </div>
                        <button className="btn btn-primary login-btn">
                            Sign In
                        </button>
                    </form>
                </div>

                <div className="sign-up">
                    Dont have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </Fade>
        </div>
    );
};

export default Login;
