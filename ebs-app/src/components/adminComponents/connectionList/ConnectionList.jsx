import "./connectionList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ConnectionDataService from "../../../services/ConnectionService";
import { Badge } from "react-bootstrap";

const ConnectionList = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    retrieveConnections();
  }, []);

  const retrieveConnections = () => {
    ConnectionDataService.getAll()
      .then(response => {
        setConnections(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  
  
  const columns = [    
    { field: "connectionId", headerName: "connection Id",  width: 170 },
    { field: "connectionNumber", headerName: "Connection Name", width: 220 },
    { field: "customerId", headerName: "customerId", width: 180 },
    { field: "connectionType", headerName: "connectionType", width: 200 },
    { field: "connectionStartDate", headerName: "connectionStartDate", width: 210 },
    { field: "load", headerName: "load", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/EditConnection/${params.row.connectionId}`}
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
      <div className="connectionList" style={{height: 500, width: '100%'}}>
      <h1>
         <Badge bg="secondary">Connection Details</Badge>
      </h1>
      <div style={{display: 'flex', justifyContent:'flex-start'}}>
        <Link to="/AddConnection" className="btn btn-outline-primary">Add New Connection</Link>
      </div>
      <br />
      <DataGrid 
        getRowId={(row) => row.connectionId}
        rows={connections}
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

export default ConnectionList;