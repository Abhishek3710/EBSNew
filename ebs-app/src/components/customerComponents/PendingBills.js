//import React from 'react'
import {Button, Table} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';
import Input from "react-validation/build/input";
//import CheckButton from "react-validation/build/button";
import { useParams,useHistory} from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Badge } from "react-bootstrap";


// import BillingsList from '../BillingsList';
// import CustomersList from '../CustomersList';
import BillingDataService from '../../services/BillingService';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const PendingBills = props => {

  const {id}=useParams();
  const history=useHistory();

    const [billings, setBillings] = useState([]);
    const [connectionId, setConnectionId] = useState("");
    const [showTable, setShowTable] = useState(false);
    //const [currentBilling, setCurrentBilling] = useState(null);

    //const id=1;
    //console.log(id);

    // useEffect(() => {
    //     retrieveBillings();
    //   }, []);
    if(id){
      setConnectionId=id;
      setShowTable(true);
    }

    const handleConnectionId = () => {
        // const cid = e.target.value;
        // setConnectionId(cid);
        setShowTable(true);
        retrieveBillings(connectionId)
      };
    

    const retrieveBillings = connectionId => {
        BillingDataService.getbyConnectionId(connectionId)
          .then(response => {
            setBillings(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

      const columns = [    
        { field: "billId", headerName: "billId",  width: 150 },
        { field: "connectionId", headerName: "connectionId", width: 150 },
        { field: "units", headerName: "units", width: 150 },
        { field: "bill_For_Month", headerName: "bill_For_Month", width: 150 },
        { field: "amount", headerName: "amount", width: 150 },
        { field: "due_Date", headerName: "due_Date", width: 200 },
        { field: "status", headerName: "status", width: 150 },
        {
          field: "action",
          headerName: "Action",
          width: 170,
          renderCell: (params) => {
            return (
              <>
                <Link
                  to={`/AddPayment/${params.row.billId}`}
                  className="btn btn-primary"
                >
                  Pay Now
                </Link>
              </>
            );
          },
        }
      ];

  return (
    <div className='edit-background'>
        {showTable ? (
            <div className="card" style={{height: 550, width: '100%'}}>
            <h1>
               <Badge bg="secondary">Billing Details</Badge>
            </h1>
            <br />
            
            <DataGrid 
              getRowId={(row) => row.billId}
              rows={billings}
              columns={columns}
              disableSelectionOnClick
              pageSize={5}
              checkboxSelection
              //sx={{ m: 2 }}
            />
          </div>

        ):(
          <div className="col-md-12">
          <br /><br /><br /><br /><br />
          <div className="card card-container">
          <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
          />
  
          <Form onSubmit={handleConnectionId}>
            <div className="form-group">
              <label htmlFor="connecionId">Please Enter Valid Connection Id</label><br />
              <input
                type="text"
                className="form-control"
                name="connectionId"
                value={connectionId} 
                onChange={(e)=>{setConnectionId(e.target.value) }}
                validations={[required]}
              />
            </div>
            <br />
            <div className="form-group">
            <button className="btn btn-primary btn-block">                
                <span>Enter</span>
            </button>
            </div>          
          </Form>
          </div>
          <br /><br /><br /><br /><br />
      </div>
            
        )}




    </div>
  )
}

export default PendingBills;
