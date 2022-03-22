import "./billingList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import BillingDataService from "../../../services/BillingService";
import { Badge } from "react-bootstrap";

const BillingList = () => {
  const [billings, setBillings] = useState([]);

  useEffect(() => {
    retrieveBillings();
  }, []);

  const retrieveBillings = () => {
    BillingDataService.getAll()
      .then(response => {
        setBillings(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleDelete = (id) => {
    setBillings(billings.filter((item) => item.billingId !== id));
  };
  
  const columns = [    
    { field: "billId", headerName: "billId",  width: 120 },
    { field: "connectionId", headerName: "connectionId", width: 100 },
    { field: "units", headerName: "units", width: 150 },
    { field: "bill_For_Month", headerName: "bill_For_Month", width: 180 },
    { field: "amount", headerName: "amount", width: 140 },
    { field: "due_Date", headerName: "due_Date", width: 150 },
    { field: "status", headerName: "status", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/EditBilling/${params.row.billId}`}
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
    <div className="card" style={{height: 500, width: '100%'}}>
      <div className="billingList" style={{height: 500, width: '100%'}}>
      <h1>
         <Badge bg="secondary">Billing Details</Badge>
      </h1>
      <div style={{display: 'flex', justifyContent:'flex-start'}}>
        <Link to="/AddBilling" className="btn btn-outline-primary">Add New Bill</Link>
      </div>
      <br />
      
      <DataGrid 
        getRowId={(row) => row.billId}
        rows={billings}
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

export default BillingList;