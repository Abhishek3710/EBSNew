import React, { useState, useRef,useContext } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = (props) => {

const {state,dispatch} = useContext(UserContext);

  const form = useRef();
  const checkBtn = useRef();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [customer, setCustomer] = useState({ Email: '', Password: ''});  
  const apiUrl = "https://backendebs.azurewebsites.net/api/customers/Login";
  
  const onChangeEmail = (e) => {
    const Email = e.target.value;
    setEmail(Email);
    setCustomer({...customer, [e.target.name]: e.target.value});    
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    setCustomer({...customer, [e.target.name]: e.target.value});    
  };

//   const onChange = (e) => {    
//     e.persist();    
//     debugger;    
//     setCustomer({...customer, [e.target.name]: e.target.value});    
//   }  
  
    const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    const data = { Email:customer.Email, Password: customer.Password };    
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios.post(apiUrl, data).then(
        (result) => {
          if(result.data.status=='200')
          {
            dispatch({type:"USER",payload:"USER"})
            props.history.push(`/CustomerDashboard`);
            //props.history.push('/CustomerDashboard');
            //window.location.reload();
          }
          else
          {
            setLoading(false)
            setMessage('Invalid Username or Password')
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="edit-background">
      <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="Email">Email Id</label>
            <Input
              type="text"
              className="form-control"
              name="Email"
              value={Email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <Input
              type="Password"
              className="form-control"
              name="Password"
              value={Password}
              onChange={onChangePassword}
              validations={[required]}
            />
            <br />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <br />
          <div>
            <h5>Login as Admin?</h5>
          <Link
              to={'/AdminLogin'}
              className="btn btn-link"
            > Admin Login
            </Link>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
    </div>
  );
};
export default Login;