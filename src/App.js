import React, { useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Home from './components/Home/Home';
import Iphone from './components/Iphone/Iphone';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Watch from './components/Watch/Watch';
import Macbook from './components/Macbook/Macbook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <ToastProvider>
                        <Route path="/" exact={true} component={Login}></Route>
                        <Route
                            path="/signup"
                            exact={true}
                            component={Register}
                        ></Route>
                        <PrivateRoute
                            path="/comingsoon"
                            exact={true}
                            component={ComingSoon}
                        ></PrivateRoute>
                        <PrivateRoute
                            path="/home"
                            exact={true}
                            component={Home}
                        ></PrivateRoute>
                        <PrivateRoute
                            path="/iphone"
                            exact={true}
                            component={Iphone}
                        ></PrivateRoute>
                        <PrivateRoute
                            path="/macbook"
                            exact={true}
                            component={Macbook}
                        ></PrivateRoute>
                        <PrivateRoute
                            path="/watch"
                            exact={true}
                            component={Watch}
                        ></PrivateRoute>
                    </ToastProvider>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
