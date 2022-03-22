//import React from 'react'
import {Button, Table} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import Input from "react-validation/build/input";
import CustomerDataService from '../../services/CustomerService';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const CustomerProfile1 = () => {


    const initialCustomerState = {
        customerId:"",
        customerName: "",
        contactNumber: "",
        emailId: "",
        password : "",
        address : "",
        city : "",
        state : "",
      };

    const [currentCustomer, setCurrentCustomer] = useState(initialCustomerState);
    const [customerId, setCustomerId] = useState("");
    const [showProfile, setShowProfile] = useState(false);    

    const handleCustomerId = () => {        
        setShowProfile(true);
        getCustomer(customerId);
      };
    

      const getCustomer = id => {
        CustomerDataService.get(id)
          .then(response => {
            setCurrentCustomer(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };    

  return (
    <div className='edit-background'>
        <div className='edit-background'>
        {showProfile ? (
        <div className="card card-container"> 
        <img 
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
        />
        <div className="edit-form">
        <h4>Customer Details</h4>
        <form>
          <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            required
            value={currentCustomer.customerName}
            //onChange={handleInputChange}
            name="customerName"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            required
            defaultValue={currentCustomer.contactNumber}
            value={currentCustomer.contactNumber}
            //onChange={handleInputChange}
            name="contactNumber"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email Id</label>
          <input
            type="text"
            className="form-control"
            id="emailId"
            //required
            value={currentCustomer.emailId}
            // onChange={handleInputChange}
            name="emailId"
            disabled
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            //required
            value={currentCustomer.password}
            // onChange={handleInputChange}
            name="password"
            disabled
          />
        </div> */}
        <div className="form-group">
          
          <label htmlFor="address">Address</label>
          <input
            type="text"
            align = "right"
            className="form-control"
            id="address"
            textAlign={'center'}
            //required
            value={currentCustomer.address}
            // onChange={handleInputChange}
            name="address"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            //required
            value={currentCustomer.city}
            // onChange={handleInputChange}
            name="city"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            //required
            value={currentCustomer.state}
            // onChange={handleInputChange}
            name="state"
            disabled
          />
        </div>
        </form>
        <br />
        <Link
              to={`/Customer/${currentCustomer.customerId}`}
              className="btn btn-secondary"
            >
              Edit
        </Link>        
      </div>
        </div>
      ):(
            
            <div className="col-md-12">
              <br /><br /><br /><br /><br />
                <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
        
            <Form onSubmit={handleCustomerId}>
            <div className="form-group">
            <label htmlFor="connecionId">Please Enter Valid Customer Id</label>
            <input
              type="text"
              className="form-control"
              name="connectionId"
              value={customerId} 
              onChange={(e)=>{setCustomerId(e.target.value) }}
              validations={[required]}
            />
            </div>
            <br />
            <div className="form-group">
                <button className="btn btn-primary btn-block">                
                <span>Enter</span>
                </button>
            </div>          
            </Form>
            </div>
            <br /><br /><br /><br /><br />
            </div>
            
        )}




    </div>

    </div>
  )
}

export default CustomerProfile1;
