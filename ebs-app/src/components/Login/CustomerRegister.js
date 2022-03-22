import React, { Component } from 'react';
//import farmers from '../../images/farmers.png';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { useNavigate, Link, NavLink } from 'react-router-dom';

class CustomerRegister extends React.Component 
{
    
    constructor(props)
    {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

     handleSubmit(event){
        event.preventDefault();

        const data = {
            FName: this.FName,
            FMobileNo: this.FMobileNo,
            FEmailId: this.FFEmailId,           
            FPassword: this.FPassword,
            FAddress: this.FAddress,
        }
        fetch("https://localhost:5000/api/farmer/Register",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                FName:event.target.FName.value,
                FMobileNo:event.target.FMobileNo.value,
                FEmailId:event.target.FEmailId.value,               
                FPassword:event.target.FPassword.value,
                FAddress: event.target.FAddress.value,
            })            
        })

        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    render() {
        return (
            <div className='base-container'>
                <div className='header'>Customer Register</div>
                
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className='content'>
                        <div className='image'>
                            {/* <img src={farmers} /> */}
                        </div>
                        <div className='form'>
                            <div className="form-group">
                                <label>Customer Name</label>
                                <input type="text" name="FName" placeholder="Enter your Name"
                                onChange={event => this.FName = event.target.value}/>                                 
                            </div>
                            <div className="form-group">
                                <label>Customer Mobile No.</label>
                                <input type="text" name="FMobileNo" placeholder="Enter phone number"
                                onChange={event => this.FMObileNo = event.target.value}/>                                 
                            </div>
                            <div className="form-group">
                                <label>Customer EmailId</label>
                                <input type="text" name="FEmailId" placeholder="Enter Email Id"
                                onChange={event => this.FEmailId = event.target.value}/>                                 
                            </div>
                            
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" name="FPassword" placeholder="Enter your password"
                                onChange={event => this.FPassword = event.target.value}/>                                 
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="FAddress" placeholder="Enter your Address"
                                onChange={event => this.FAddress = event.target.value}/>                                 
                            </div>

                        </div>
                    </div>
                    <div>
                    <button className='btn btn-primary btn-block'>Register</button>
                    </div>
                </form> 
                
            </div >
        );
    }
}

export default CustomerRegister;