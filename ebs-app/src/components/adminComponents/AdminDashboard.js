import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import Admin from '../../images/Admin.png';

export class AdminDashboard extends Component{

    render(){
        return(
            <div>       
                <br /><br />      
                <div className='header'style={{ color: 'red' }}>
                   <h1> <b>Welcome Admin!!! </b> </h1> 
               </div>
               
                <br/>               
                <div className='image'>                    
                    <img className='Admin' src={Admin} />
                </div>
            </div>
        )
    }
}

