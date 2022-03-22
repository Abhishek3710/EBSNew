import React, { useState } from "react";
import ConnectionDataService from "../../../services/ConnectionService";
import { useParams,useHistory} from "react-router-dom";



const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const AddConnection = () => {

  const history=useHistory();

  const initialConnectionState = {
    connectionId: null,
    connectionNumber:"",
    customerId: "",
    connectionType : "",
    connectionStartDate  : "",
    load: "",
  };
  const [connection, setConnection] = useState(initialConnectionState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setConnection({ ...connection, [name]: value });
  };

  const saveConnection = () => {
    var data = {
	      connectionNumber:connection.connectionNumber,
        customerId: Number(connection.customerId),
        connectionType: connection.connectionType,
        connectionStartDate : connection.connectionStartDate,
        load : Number(connection.load),
    };
    ConnectionDataService.create(data)
      .then(response => {
        setConnection({
          connectionid: response.data.connectionId,         
          connectionNumber: response.data.connectionNumber,
	        customerId: response.data.customerId,
          connectionType: response.data.connectionType,
          connectionStartDate : response.data.connectionStartDate,
          load : response.data.load,
          //customer : response.data.customer,
        });
        console.log(response.data);
        history.push(`/ConnectionList`)
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="edit-background">
      <br /><br />
      <div className="card" style={{width: '25%'}}>
      <div className="col-md-12">
	        <div className="form-group">
            <label htmlFor="connectionNumber">connectionNumber</label>
            <input
              type="text"
              className="form-control"
              id="connectionNumber"
              required
              value={connection.connectionNumber}
              onChange={handleInputChange}
              name="connectionNumber"
            />
          </div>
          <div className="form-group">
            <label htmlFor="customerId">Customer Id</label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              required
              value={connection.customerId}
              onChange={handleInputChange}
              name="customerId"
            />
          </div>
          <div className="form-group">
            <label htmlFor="connectionType">Connection Type</label>
            <input
              type="text"
              className="form-control"
              id="connectionType"
              required
              value={connection.connectionType}
              onChange={handleInputChange}
              name="connectionType"
            />
          </div>
          <div className="form-group">
            <label htmlFor="connectionstartDate">Connection Start Date</label>
            <input
              type="date"
              className="form-control"
              id="connectionStartDate"
              required
              value={connection.connectionStartDate}
              onChange={handleInputChange}
              name="connectionStartDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="load">Load</label>
            <input
              type="text"
              className="form-control"
              id="load"
              required
              value={connection.load}
              onChange={handleInputChange}
              name="load"
            />
          </div> 
          <br />         
          <button 
              type="submit"
              className="btn btn-primary" onClick={saveConnection}>
              Add
            </button>
        </div>
      </div>
      <br /><br />
    </div>
  )
};
export default AddConnection;