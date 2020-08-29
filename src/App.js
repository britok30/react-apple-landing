import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
