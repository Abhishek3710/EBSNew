import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import { useParams,useHistory} from "react-router-dom";
import Customer from '../../images/Customer.png';

const CustomerDashboard = () => {
    const {id}=useParams();
    console.log(id);
  return (
            <div >
                {/* <Navbar bg="dark" expand="lg">
                    <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to={`/CustomerProfile/${id}`}>
                      Customer Profile
                    </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/billingDetails">
                     Bills
                    </NavLink>
                
                <NavLink className="d-inline p-2 bg-dark text-white" to="/PendingBills">
                     Pending Bill
                </NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/home">
                    Logout
                    </NavLink>
                    </Nav>
                </Navbar> */}
                <br /><br /><br />
               <div className='header'style={{ color: 'red' }}>
                   <h1> <b>Welcome Customer!!! </b> </h1> 
               </div>
               <br/><br />
                <div className='image'>                   
                    <img className='Customer' src={Customer} />
                </div>                     
               
            </div>
  )
}

export default CustomerDashboard;