import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Fortesting from './Fortesting';
import Product from './Product';


ReactDOM.render(
    <Router>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/Landing" component={Landing}></Route>
            <Route exact path="/Fortesting" component={Fortesting}></Route>
            <Route exact path="/Product" component={Product}></Route>

    </Router>
    
    
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
