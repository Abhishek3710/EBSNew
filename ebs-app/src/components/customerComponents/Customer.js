import React, { useState, useEffect } from "react";
import CustomerDataService from "../../services/CustomerService";
import { useParams,useHistory} from "react-router-dom";


const Customer = props => {
    const {id}=useParams();
    const history=useHistory();
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
  const [message, setMessage] = useState("");
  const getCustomer = id => {
    CustomerDataService.get(id)
      .then(response => {
        setCurrentCustomer(response.data);        
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCustomer(id);
   
  }, [props.match.params.customerId]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCustomer({ ...currentCustomer, [name]: value });
  };

  const updateCustomer = () => {
    CustomerDataService.update(currentCustomer.customerId, currentCustomer)
      .then(response => {
        console.log(response.data);
        setMessage("The Customer was updated successfully!");
        history.push(`/CustomerDashBoard/${currentCustomer.customerId}`)
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  return (
    <div className="edit-background">
      {currentCustomer ? (
        <div className="card card-container"> 
          <img 
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
          />
          <div className="edit-form">
          <h4>Customer</h4>
          <form>
            <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              required
              value={currentCustomer.customerName}
              onChange={handleInputChange}
              name="customerName"
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
              onChange={handleInputChange}
              name="contactNumber"
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
              onChange={handleInputChange}
              name="emailId"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              //required
              value={currentCustomer.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              //required
              value={currentCustomer.address}
              onChange={handleInputChange}
              name="address"
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
              onChange={handleInputChange}
              name="city"
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
              onChange={handleInputChange}
              name="state"
            />
          </div>
          </form>
          <br />                    
          <button
            type="submit"
            className="btn btn-primary" onClick={updateCustomer}>
        
            Update
          </button>
          <p>{message}</p>
        </div>
          </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Customer...</p>
        </div>
        
      )}
      
    </div>
  );
};
export default Customer;