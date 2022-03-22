import React, { useState, useEffect } from "react";
import BillingDataService from "../../../services/BillingService";
import { useParams,useHistory} from "react-router-dom";


const EditBilling = props => {
    const {id}=useParams();
    const history=useHistory();
  const initialBillingState = {
    billId:"",
    connectionId: "",
    units: "",
    bill_For_Month: "",
    amount : "",
    due_Date : "",
    status : "",
  };
  const [currentBilling, setCurrentBilling] = useState(initialBillingState);
  const [message, setMessage] = useState("");
  const getBilling = id => {
    BillingDataService.get(id)
      .then(response => {
        setCurrentBilling(response.data);
        // console.log(response.data, "iam edit");
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getBilling(id);
   
  }, [props.match.params.billId]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBilling({ ...currentBilling, [name]: value });
  };

  const updateBilling = () => {
    BillingDataService.update(currentBilling.billId, currentBilling)
      .then(response => {
        console.log(response.data);
        setMessage("The Billing was updated successfully!");
        history.push("/BillingList")
      })
      .catch(e => {
        console.log(e);
      });
  };
  const deleteBilling = () => {
    BillingDataService.remove(currentBilling.billId)
      .then(response => {
        console.log(response.data);
        props.history.push("/BillingList");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="edit-background">
      {currentBilling ? (
        <div className="card" style={{width: '25%'}}>
          <div className="edit-form">
          <h4>Billing</h4>
          <form>
            <div className="form-group">
            <label htmlFor="connectionId">connection Id</label>
            <input
              type="text"
              className="form-control"
              id="connectionId"
              required
              value={currentBilling.connectionId}
              onChange={handleInputChange}
              name="connectionId"
            />
          </div>
          <div className="form-group">
            <label htmlFor="units">Units</label>
            <input
              type="text"
              className="form-control"
              id="units"
              required
              defaultValue={currentBilling.units}
              value={currentBilling.units}
              onChange={handleInputChange}
              name="units"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bill_For_Month">bill_For_Month</label>
            <input
              type="text"
              className="form-control"
              id="bill_For_Month"
              //required
              value={currentBilling.bill_For_Month}
              onChange={handleInputChange}
              name="bill_For_Month"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              //required
              value={currentBilling.amount}
              onChange={handleInputChange}
              name="amount"
            />
          </div>
          <div className="form-group">
            <label htmlFor="due_Date">due_Date</label>
            <input
              type="date"
              className="form-control"
              id="due_Date"
              //required
              value={currentBilling.due_Date}
              onChange={handleInputChange}
              name="due_Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">status</label>
            <select
              type="text"
              className="form-control"
              id="status"
              required
              value={currentBilling.status}
              onChange={handleInputChange}
              name="status"
            >
              <option value=""></option>
              <option value="Not Paid">Not Paid</option>
              <option value="Paid">Paid</option>
              </select>
          </div>
          </form>
          <br />
          <button
            type="submit"
            className="btn btn-danger" onClick={deleteBilling}>
            Delete
          </button>          <button
            type="submit"
            className="btn btn-primary" onClick={updateBilling}>
            Save
          </button>
          <p>{message}</p>
        </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Billing...</p>
        </div>
      )}
    </div>
  );
};
export default EditBilling;