import React,{Component} from 'react';

export class AboutUs extends Component{

    render(){
        return(
            <div className='edit-background'>
                <div className='AboutUs'>
                <br />  <br/>  <br/>
                            
                <div className='header'style={{ color: 'red' }}><h3><b>Electricity Billing System helps in maintaining the bills and the payments.</b></h3>
                </div>
               <br/>

                    <div style={{ color: 'white'}}>
                        <b>
                            <h5>Electricity Billing Management System is made to keep the records of the bills of the customers.</h5>
                            
                            <h5>The admin can manage all the accounts and the registered users like employees and customers can only manage their accounts. </h5>                  
                            <h5>This system helps in maintaining the bills and the payments. Admin and customers all have a different interface and different privileges according to their needs.</h5>
                        </b>
                    </div>
                 
                   <br/> <br/> <br/>              

                   <div className='header'style={{ color: 'blue'}}><h4><b>Feactures Of Electricity Billing Management System</b></h4></div>
                   <div style={{ color: 'white'}}>
                        <b><b>
                            <h5>Users can search for details of the bills, Units, Reading, Consumptions.</h5>
                            
                            <h5> Electricity Bill Payment Management is an online application, from which the 
                            user can easily manage Unit details, Customer details, Connection details.</h5>
                            
                            <h5>Admin can track all the information of units, Bills, Customer, etc.</h5>
                            
                            <h5>Admin can edit, add, delete, and update, the records of connection, Reading consumption.</h5>
                        
                            <h5>Manage all the information about Customer, Reading, Units.</h5>
                        </b>
                        </b>
                   </div>
            </div>
            </div>
        )
    }
}