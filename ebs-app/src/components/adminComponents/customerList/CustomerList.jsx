import "./customerList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CustomerDataService from "../../../services/CustomerService";
import { Badge } from "react-bootstrap";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    retrieveCustomers();
  }, []);

  const retrieveCustomers = () => {
    CustomerDataService.getAll()
      .then(response => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((item) => item.customerId !== id));
  };
  
  const columns = [    
    { field: "customerId", headerName: "Id",  width: 90 },
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 180,
    },
    { field: "contactNumber", headerName: "contactNumber", width: 180 },
    { field: "emailId", headerName: "emailId", width: 200 },
    // { field: "password", headerName: "password", width: 140 },
    { field: "address", headerName: "address", width: 140 },
    { field: "city", headerName: "city", width: 100 },
    { field: "state", headerName: "state", width: 110 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/EditCustomer/${params.row.customerId}`}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="card" style={{height: 600, width: '100%'}}>
      <div className="customerList">
      <h1>
         <Badge bg="secondary">Customer Details</Badge>
      </h1>     
      <div style={{display: 'flex', justifyContent:'flex-start'}}>
        <Link to="/AddCustomer" className="btn btn-outline-primary">Add New Customer</Link>
      </div>
      <br />
      <DataGrid 
        getRowId={(row) => row.customerId}
        rows={customers}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        checkboxSelection
        sx={{ m: 2 }}
      />
    </div>
    </div>
  )
}

export default CustomerList;