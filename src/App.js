import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/home" exact={true} component={Home}></Route>
                <Route path="/" exact={true} component={Login}></Route>
            </div>
        </Router>
    );
}

export default App;
