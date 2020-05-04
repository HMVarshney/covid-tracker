import React, { Component } from 'react';
import App from './App'
import{BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import About from './components/about';
import IndiaTracker from './components/India/india'

const Main = () => {
    return ( 
        <div>
            <NavBar />
            <BrowserRouter>
                <Route exact path="/" component={App} />
                <Route exact path='/about' component={About} />
                <Route exact path='/india' component={IndiaTracker} />
            </BrowserRouter>
        </div>
    );
}
 
export default Main;