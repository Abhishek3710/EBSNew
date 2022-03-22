import React, { useState, useEffect } from "react";
import CustomerDataService from "../../../services/CustomerService";
import { useParams,useHistory} from "react-router-dom";


const validEmail = (value) => {
    if (!(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const AddCustomer = () => {
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
  const [customer, setCustomer] = useState(initialCustomerState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

    const saveCustomer = () => {
    var data = {
        customerName: customer.customerName,
        contactNumber: customer.contactNumber,
        emailId: customer.emailId,
        password : customer.password,
        address : customer.address,
        city : customer.city,
        state : customer.state,
    };
    CustomerDataService.create(data)
      .then(response => {
        setCustomer({
          id: response.data.customerId,
          customerName: response.data.customerName,
          contactNumber: response.data.contactNumber,
          emailId: response.data.emailId,
          password : response.data.password,
          address : response.data.address,
          city : response.data.city,
          state : response.data.state
        });
        console.log(response.data);
        history.push(`/CustomerList`)
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="edit-background">
      <div className="card" style={{width: '25%'}}>
        <div className="col-md-12">
         
            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
              type="text"
              className="form-control"
              id="customerName"
              required
              value={customer.customerName}
              onChange={handleInputChange}
              name="customerName"
              validations={[required]}
              maxLength="15"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
              type="text"
              className="form-control"
              id="contactNumber"
              required
              value={customer.contactNumber}
              onChange={handleInputChange}
              name="contactNumber"
              validations={[required]}
              minLength="10"
              maxLength="10"
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailId">Email Id</label>
              <input
              type="text"
              className="form-control"
              id="emailId"
              required
              value={customer.emailId}
              onChange={handleInputChange}
              name="emailId"
              validations={[required, validEmail]}
              maxLength="20"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
              type="text"
              className="form-control"
              id="password"
              required
              value={customer.password}
              onChange={handleInputChange}
              name="password"
              // validations={[required, validpassword]}
              maxLength="8"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
              type="text"
              className="form-control"
              id="address"
              required
              value={customer.address}
              onChange={handleInputChange}
              name="address"
              validations={[required]}
              maxLength="20"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
              type="text"
              className="form-control"
              id="city"
              required
              value={customer.city}
              onChange={handleInputChange}
              name="city"
              validations={[required]}
              maxLength="11"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
              type="text"
              className="form-control"
              id="state"
              required
              value={customer.state}
              onChange={handleInputChange}
              name="state"
              validations={[required]}
              maxLength="11"
              />
            </div>
            <br />
            <button 
              type="submit"
              className="btn btn-primary" onClick={saveCustomer}>
              Add
            </button>
        </div>
      </div>
    </div>
  );
};
export default AddCustomer;