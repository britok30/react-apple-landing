import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <form action="" className="form">
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
        </div>
    );
};

export default Login;
