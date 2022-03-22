import React, { useState, useEffect } from "react";
import ConnectionDataService from "../../../services/ConnectionService";
import { useParams,useHistory} from "react-router-dom";

const EditConnection = props => {
    const {id}=useParams();
    const history=useHistory();
    const initialConnectionState = {
    connectionId:"",
    connectionNumber:"",
    customerId: "",
    connection_type: "",
    connection_start_date: "",
    load : "",   
    customer : "",
 
  };
  const [currentConnection, setCurrentConnection] = useState(initialConnectionState);
  const [message, setMessage] = useState("");
  const getConnection = id => {
    ConnectionDataService.get(id)
      .then(response => {
        setCurrentConnection(response.data);
        // console.log(response.data, "iam edit");
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getConnection(id);
   
  }, [props.match.params.connectionId]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentConnection({ ...currentConnection, [name]: value });
  };

  const updateConnection = () => {
    ConnectionDataService.update(currentConnection.connectionId, currentConnection)
      .then(response => {
        console.log(response.data);
        setMessage("The Connection was updated successfully!");
        history.push("/ConnectionList")
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteConnection = () => {
    ConnectionDataService.remove(currentConnection.connectionId)
      .then(response => {
        console.log(response.data);
        props.history.push("/ConnectionList");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="edit-background">
      {currentConnection ? (
        <div className="card" style={{width: '25%'}}>
          <div className="edit-form">
          <h4>Connection</h4>
          <form>
            <div className="form-group">
            <label htmlFor="connectionId">Connection Id</label>
            <input
              type="text"
              className="form-control"
              id="customerId"
              required
              value={currentConnection.connectionId}
              onChange={handleInputChange}
              name="customerId"
            />
          </div>
	      <div className="form-group">
            <label htmlFor="connectionNumber">Connection Number</label>
            <input
              type="text"
              className="form-control"
              id="connectionNumber"
              required
              value={currentConnection.connectionNumber}
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
              defaultValue={Number(currentConnection.customerId)}
              value={Number(currentConnection.customerId)}
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
              //required
              value={currentConnection.connectionType}
              onChange={handleInputChange}
              name="connectionType"
            />
          </div>
          <div className="form-group">
            <label htmlFor="connectionStartDate">Connection Start Date</label>
            <input
              type="date"
              className="form-control"
              id="connectionStartDate"
              //required
              value={currentConnection.connectionStartDate}
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
              //required
              value={Number(currentConnection.load)}
              onChange={handleInputChange}
              name="load"
            />
          </div>
          
          </form>
          <br />
          <button
            type="submit"
            className="btn btn-danger" onClick={deleteConnection}>
            Delete
          </button>          <button
            type="submit"
            className="btn btn-primary" onClick={updateConnection}>
            Save
          </button>
          <p>{message}</p>
        </div>
      </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Connection...</p>
        </div>
      )}
    </div>
  );
};
export default EditConnection;