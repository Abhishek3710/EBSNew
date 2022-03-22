import React,{Component} from 'react';

export class AboutUs extends Component{

    render(){
        return(
            <div className='plain-background'>
                <div className='AboutUs'>
                <br />  <br/>  <br/>
                            
                <div className='header'style={{ color: 'red' }}><h3><b>Electricity Billing System helps in maintaining the bills and the payments.</b></h3>
                </div>
               <br/>

                <h5>Electricity Billing Management System is made to keep the records of the bills of the customers.</h5>
                    
                    <h5>The admin can manage all the accounts and the registered users like employees and customers can only manage their accounts. </h5>                  
                   <h5>This system helps in maintaining the bills and the payments. Admin and customers all have a different interface and different privileges according to their needs.</h5>
                 
                   <br/> <br/> <br/>              

                   <div className='header'style={{ color: 'blue'}}><h4><b>Feactures Of Electricity Billing Management System</b></h4></div>
                   
                  <h6>Users can search for details of the bills, Units, Reading, Consumptions.</h6>
                 
                   <h6> Electricity Bill Payment Management is an online application, from which the 
                   user can easily manage Unit details, Customer details, Connection details.</h6>
                   
                   <h6>Admin can track all the information of units, Bills, Customer, etc.</h6>
                  
                   <h6>Admin can edit, add, delete, and update, the records of connection, Reading consumption.</h6>
                
                   <h6>Manage all the information about Customer, Reading, Units.</h6>
            </div>
            </div>
        )
    }
}