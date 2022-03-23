import React, { useState, useRef,useContext } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
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
  const [admin, setAdmin] = useState({ Email: '', Password: ''});  
  const apiUrl = "https://backendebs.azurewebsites.net/api/Admin/Login";
  
  const onChangeEmail = (e) => {
    const Email = e.target.value;
    setEmail(Email);
    setAdmin({...admin, [e.target.name]: e.target.value});    
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    setAdmin({...admin, [e.target.name]: e.target.value});    
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
    const data = { Email:admin.Email, Password: admin.Password };    
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      axios.post(apiUrl, data).then(
        (result) => {
          const adminId = 1;
          if(result.data.status=='200')
          {
            dispatch({type:"ADMIN",payload:"ADMIN"})
            //props.history.push(`/CustomerDashboard/${customerId}`);
             props.history.push('/AdminDashboard');
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
      <div>
        <br /><br />
      </div>
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="Email">User Name</label>
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
          </div>
          <br />
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <br />
          
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <br />
        </Form>
      </div>
      <br /><br />
    </div>
  );
};
export default Login;