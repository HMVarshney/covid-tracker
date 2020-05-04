import React, { Component } from 'react';
import StyleSheet from 'react'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg bg-dark">
            <h4><a class="navbar-brand badge badge-primary" href="/">Covid-Tracker</a></h4>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active text-white" href="/india">For India</a>
                    <a class="nav-link active text-white" href="/about">About</a>
                </div>
            </div>
            </nav>
         );
    }
}
 
export default NavBar;

