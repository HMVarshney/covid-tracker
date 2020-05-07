import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg bg-dark">
            <h4><a className="navbar-brand badge badge-primary" href="/">Covid-Tracker</a></h4>
                <div className="navbar-nav">
                    <h6><a className="nav-link active text-white" href="/india">For India</a></h6>
                    <h6><a className="nav-link active text-white" href="/about">About</a></h6>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;

