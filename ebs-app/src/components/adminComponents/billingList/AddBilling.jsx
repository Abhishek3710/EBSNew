import React, { useState } from "react";
import BillingDataService from "../../../services/BillingService";
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

const AddBilling = () => {

  const history=useHistory(); 

  const initialBillingState = {
    billId: null,
    connectionId: "",
    units: "",
    bill_for_month: "",
    amount : "",
    due_date : "",
    status : ""
  };
  const [billing, setBilling] = useState(initialBillingState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBilling({ ...billing, [name]: value });
  };

  const saveBilling = () => {
    var data = {
        connectionId: billing.connectionId,
        units: billing.units,
        bill_For_Month: billing.bill_For_Month,
        amount : billing.amount,
        due_Date : billing.due_Date,
        status : billing.status
    };

    BillingDataService.create(data)
      .then(response => {
        setBilling({
          billId: response.data.billId,
          connectionId: response.data.connectionId,
          units: response.data.units,
          bill_For_Month: response.data.bill_For_Month,
          amount : response.data.amount,
          due_Date : response.data.due_Date,
          status : response.data.status
        });
        console.log(response.data);
        history.push(`/BillingList`)
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="edit-background">
      <div className="card" style={{width: '25%'}}>
      <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="connectionId">connection Id</label>
            <input
              type="text"
              className="form-control"
              id="connectionId"
              required
              value={billing.connectionId}
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
              value={billing.units}
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
              required
              value={billing.bill_For_Month}
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
              required
              value={billing.amount}
              onChange={handleInputChange}
              name="amount"
            />
          </div>
          <div className="form-group">
            <label htmlFor="due_Date">due_Date</label>
            <input
              type="text"
              className="form-control"
              id="due_Date"
              required
              value={billing.due_Date}
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
            value={billing.status}
            onChange={handleInputChange}
            name="status"
            >
              <option value=""></option>
              <option value="Not Paid">Not Paid</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          <button 
              type="submit"
              className="btn btn-primary" onClick={saveBilling}>
              Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddBilling;