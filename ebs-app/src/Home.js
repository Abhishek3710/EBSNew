import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
// import customer from '../../images/customer.png';
// import supplier from '../../images/supplier.png';
// import admin from '../../images/admin.png';
//import Homepage from '../../images/Homepage.png';

class Home extends Component {
    render() {
        return (
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
            
        );
    }
}

export default Home;