import React,{Component, useContext} from 'react';
//import {NavLink} from 'react-router-dom';
//import {Navbar,Nav, Button} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { UserContext } from '../../App';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';


// export class Navigation extends Component{

//     render(){
//         return(
//             <Navbar bg="dark" expand="lg">
//                 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                 <Navbar.Collapse id="basic-navbar-nav"/>
//                 <Nav>                
//                     <NavLink className="d-inline p-3 bg-dark text-white" to="/Home">
//                         Home
//                     </NavLink>

//                     <NavLink className="d-inline p-3 bg-dark text-white" to="/AboutUs">
//                         AboutUs
//                     </NavLink>
//                 </Nav>
//             </Navbar>
//         )
//     }
// }


// export const Navigation =() =>{
//     return(
//         <>
//             <nav className='navbar navbar-expand-lg navbar-light bg-light' >
//                 <NavLink className="navbar-brand" to="#">
//                 </NavLink>
//                 <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="navbarSupportedContent" >
//                     <span className='navbar-toggler-icon'></span>
//                 </button>
//                 <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//                     <ul className='navbar-nav ml-auto'>
//                         <li className='nav-item-active'>
//                             <NavLink className="d-inline p-3 bg-dark text-white" to="/Home">Home</NavLink>
//                         </li>
//                         <li className='nav-item-active'>
//                         <NavLink className="d-inline p-3 bg-dark text-white" to="/AboutUs">AboutUs</NavLink>
//                         </li>

//                     </ul>

//                 </div>
//             </nav>
//         </>
//     )
// }

export const Navigation =() =>{

    const {state,dispatch} =useContext(UserContext);

    const RenderMenu = () => {
        if(state==="USER"){
            return(
                <>
                        <NavLink to="/CustomerProfile" activeStyle>Customer Profile</NavLink>
                        <NavLink to="/BillingDetails" activeStyle>Bills</NavLink>
                        <NavLink to="/PendingBills" activeStyle>Pending Bills</NavLink>
                        <NavBtnLink to='/CustomerLogout'>Logout</NavBtnLink> 
                </>
            )
        }
        else if(state==="ADMIN"){
            return(
                <>
                    <NavLink to="/CustomerList" activeStyle>Customers</NavLink>
                    <NavLink to="/ConnectionList" activeStyle>Connections</NavLink>
                    <NavLink to="/BillingList" activeStyle>Billings</NavLink>
                    <NavBtnLink to='/AdminLogout'>Logout</NavBtnLink>               
                </>
            )
        }
        else{
            return(
                <>
                    <NavLink to="/Home" activeStyle>Home</NavLink>
                    <NavLink to="/AboutUs" activeStyle>AboutUs</NavLink>
                    <NavLink to="/ContactUs" activeStyle>Contact Us</NavLink>
                    <NavLink to="/AddCustomer" activeStyle>Register</NavLink>    
                    <NavBtnLink to='/CustomerLogin'>Sign In</NavBtnLink>             
                </>
            )
        }
    }


        return(

            // <Navbar bg="dark">
            //     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            //         <NavLink className="navbar-brand" to="#">
            //         </NavLink>
            //         <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="navbarSupportedContent" >
            //             <span className='navbar-toggler-icon'></span>
            //         </button>
            //         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            //             <ul className='navbar-nav ml-auto'>
            //                 <RenderMenu /> 
            //             </ul>
    
            //         </div>
            //     </nav>
            // </Navbar>
            <>
                <Nav>
                    <NavLink to='/'>
                        {/* <img src={require('../../images/ebslogo.avif')} alt='logoo' /> */}
                        <h1>EBS</h1>
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        {/* <NavLink to='/about' activeStyle>About</NavLink>
                        <NavLink to='/services' activeStyle>Services</NavLink>
                        <NavLink to='/contact-us' activeStyle>Contact Us</NavLink>
                        <NavLink to='/sign-up' activeStyle>Sign Up</NavLink> */}

                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                        <RenderMenu />
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn> */}
                </Nav>
            </>
        )
    }