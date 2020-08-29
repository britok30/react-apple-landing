import React from 'react';
import Fade from 'react-reveal';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
    return (
        <div className="register__container-outer">
            <Fade bottom duration={5000} distance="20px">
                <div className="register__container-inner">
                    <form className="form" autoComplete="off">
                        <h2 className="input-header">Sign-Up</h2>
                        <div>
                            <label htmlFor="username">Full Name</label>
                            <input
                                required
                                name="username"
                                type="text"
                                className="login-input"
                                placeholder="John Doe"
                            />
                        </div>
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
                        <button className="btn btn-dark login-btn">
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
