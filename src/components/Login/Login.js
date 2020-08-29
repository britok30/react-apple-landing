import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <form action="">
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <button className="btn btn-dark">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
