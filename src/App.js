import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/home" exact={true} component={Home}></Route>
                <Route path="/" exact={true} component={Login}></Route>
                <ToastProvider>
                    <Route
                        path="/signup"
                        exact={true}
                        component={Register}
                    ></Route>
                </ToastProvider>
            </div>
        </Router>
    );
}

export default App;
