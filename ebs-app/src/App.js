import logo from './logo.svg';
import './App.css';
import './css/App1.css'


// //////////////////////////////////////////////////////////////////
import Home from './Home';
import CustomerRegister from './components/Login/CustomerRegister';

import { Component, createContext,useReducer } from 'react';
import { initialState,reducer } from './reducer/UseReducer';

import CustomerLogin from './components/customerComponents/CustomerLogin';
import CustomerLogout from './components/customerComponents/CustomerLogout';
import AdminLogout from './components/adminComponents/AdminLogout';

import AddCustomer from './components/adminComponents/customerList/AddCustomer';
import CustomerDashboard from './components/customerComponents/CustomerDashboard';
import Customer from './components/customerComponents/Customer';
import PendingBills from './components/customerComponents/PendingBills';
import BillingDetails from './components/customerComponents/BillingDetails';

import EditCustomer from './components/adminComponents/customerList/EditCustomer';

import { AdminDashboard } from './components/adminComponents/AdminDashboard';
import { ContactUs } from './components/Login/ContactUs';





import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { AboutUs } from './components/Login/AboutUs';
import AdminLogin from './components/adminComponents/AdminLogin';
import {Navigation} from './components/Login/Navigation';
import CustomerProfile from './components/customerComponents/CustomerProfile';
//import CustomersList from './components/adminComponents/CustomersList';
import CustomerList from './components/adminComponents/customerList/CustomerList';

// import ConnectionsList from './components/ConnectionsList';
import ConnectionList from './components/adminComponents/connectionList/ConnectionList';
import AddConnection from './components/adminComponents/connectionList/AddConnection';
import EditConnection from './components/adminComponents/connectionList/EditConnection';
import BillingList from './components/adminComponents/billingList/BillingList';
import AddBilling from './components/adminComponents/billingList/AddBilling';
import EditBilling from './components/adminComponents/billingList/EditBilling';
import AddPayment from './components/customerComponents/AddPayment';


// class App extends Component {
//   constructor(props) {
//        super(props);
//        this.state = {
//        isLoggedInActive: true,
//      }
//    }

//    render() {


//     return (

//        <BrowserRouter>
//        <div className="App">
//          {<Navigation />}
//           <Switch>           
//            <Route path='/CustomerLogin' component={CustomerLogin}/>
//            <Route exact path="/" component={Home}/>
//            <Route path='/CustomerRegister' component={CustomerRegister}/>           
//            <Route path='/AdminLogin' component={AdminLogin}/>            
//            <Route path='/AboutUs' component={AboutUs}/>
//            <Route path='/Home' component={Home}/>           
//            <Route path='/CustomerDashboard/:id' component={CustomerDashboard}/>
//            <Route path='/CustomerProfile/:id' component={CustomerProfile}/>
//            <Route path='/AddCustomer' component={AddCustomer}/>
//            <Route path='/CustomersList' component={CustomersList}/>
//            <Route path='/Customer/:id' component={Customer}/>

//            <Route path='/EditCustomer/:id' component={EditCustomer}/>
//            <Route path='/BillingsList' component={BillingsList}/>
//            <Route path='/AddConnection' component={AddConnection}/>
//            <Route path='/ConnectionsList' component={ConnectionsList}/>
//            <Route path='/Connection/:id' component={Connection}/>
//            <Route path='/PendingBills' component={PendingBills}/>
//            <Route path='/BillingDetails' component={BillingDetails}/>
//            <Route path='/AddBilling' component={AddBilling}/>
//            <Route path='/BillingsList' component={BillingsList}/>
//            <Route path='/Billing/:id' component={Billing}/>
//            <Route path='/AddPayment/:id' component={AddPayment}/>
//            <Route path='/AdminDashboard' component={AdminDashboard}/>
//           </Switch> 
//        </div>
//       </BrowserRouter>
//     );
//    }
// }

// export default App;

export const UserContext = createContext();


const Routing = () => {
  return(
    <Switch>           
              <Route path='/CustomerLogin' component={CustomerLogin}/>
              <Route path='/CustomerLogout' component={CustomerLogout}/>
              <Route path='/AdminLogout' component={AdminLogout}/>
              <Route path='/ContactUs' component={ContactUs}/>


              <Route exact path="/" component={Home}/>
              <Route path='/CustomerRegister' component={CustomerRegister}/>
              <Route path='/AdminLogin' component={AdminLogin}/>
              <Route path='/AboutUs' component={AboutUs}/>
              <Route path='/Home' component={Home}/>
              <Route path='/CustomerDashboard/' component={CustomerDashboard}/>
              <Route path='/CustomerProfile' component={CustomerProfile}/>
              <Route path='/AddCustomer' component={AddCustomer}/>
              {/* <Route path='/CustomersList' component={CustomersList}/> */}
              <Route path='/CustomerList' component={CustomerList}/>
              <Route path='/Customer/:id' component={Customer}/>
              
              <Route path='/EditCustomer/:id' component={EditCustomer}/>
              <Route path='/AddConnection' component={AddConnection}/>
              {/* <Route path='/ConnectionsList' component={ConnectionsList}/> */}
              <Route path='/ConnectionList' component={ConnectionList}/>
              <Route path='/EditConnection/:id' component={EditConnection}/>
              <Route path='/PendingBills' component={PendingBills}/>
              <Route path='/BillingDetails' component={BillingDetails}/>
              <Route path='/AddBilling' component={AddBilling}/>
              <Route path='/BillingList' component={BillingList}/>
              <Route path='/EditBilling/:id' component={EditBilling}/>
              <Route path='/AddPayment/:id' component={AddPayment}/>
              <Route path='/AdminDashboard' component={AdminDashboard}/>
    </Switch> 
  )
}


const App=()=>{

  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <>
        <BrowserRouter>
        <UserContext.Provider value={{state,dispatch}}>
          <div className="App">
            <Navigation /> 
            <Routing />           
          </div>
        </UserContext.Provider>
        </BrowserRouter>
    </>
  )
}

export default App;