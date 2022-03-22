import React from 'react'
import {Table} from 'react-bootstrap';
import { useEffect,useState } from 'react';
import axios from 'axios';
const NewCustomer = () => {
    const [customer, setCustomer] = useState([])
    useEffect(() => {
        axios.get("https://localhost:44312/api/Customers")
        .then((result)=>{console.log(result)})
        .catch((error)=>{console.log("error")})
    
    }, [])
    
  return (
    <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>CustomerName</th>
                            <th>ContactNumber</th>
                            <th>Email ID</th>
                            <th>Passwordd</th>
                            <th>Addresss</th>
                            <th>Cityy</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.state.custs.map(cust=>
                            <tr key={cust.CustomerId}>
                                <td>{cust.CustomerId}</td>
                                <td>{cust.CustomerName}</td>
                                <td>{cust.ContactNumber}</td>
                                <td>{cust.EmailId}</td>
                                <td>{cust.Password}</td>
                                <td>{cust.Address}</td>
                                <td>{cust.City}</td>
                                <td>{cust.state}</td>
                            </tr>)} */}
                    </tbody>
                </Table>
            </div>
  )
}

export default NewCustomer