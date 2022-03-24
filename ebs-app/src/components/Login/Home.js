import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
// import customer from '../../images/customer.png';
// import supplier from '../../images/supplier.png';
// import admin from '../../images/admin.png';
import Homepage from '../../images/Homepage.png';

class Home extends Component {
    render() {
        return (
            <div className='edit-background'>
                <div className='base-container'>
                    <div className='content'>
                        <div className='header'><h1>Electricity Billing system</h1></div>
                        <br/>
                        <img className='homepage' src={Homepage} /><br />
                    </div>
                    <div className="user-login">
                        <div className="customer-login" >                           
                            <Link to={"/customerLogin"} className="btn btn-primary">
                             Customer Login
                             </Link>  
                            
                            
                        </div>
                        {/* <div className="admin-login">
                            
                            <Link to={"/adminLogin"}>
                            <button className="btn">
                             Admin Login
                            </button>
                            </Link>
                        </div> */}
                        {/* <div className="supplier-login" >
                            <img src={supplier} /><br />
                            <Link to={"/supplierLogin"}>
                            <button className="btn">
                             Supplier Login
                            </button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;