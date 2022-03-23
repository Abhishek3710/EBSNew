import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='abc'> 
                <div className="img-background">
                <div className="site-info">
                    <div className="title">
                        Electricity Billing System
                    </div>
                    <div className="sub-title">
                        Save power, energize the future.
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default Home;