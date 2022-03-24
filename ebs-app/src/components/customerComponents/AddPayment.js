import React, { useState, useEffect } from "react";
import BillingDataService from "../../services/BillingService";
import { useParams,useHistory} from "react-router-dom";


const Billing = props => {
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
    //setCurrentBilling({ ...currentBilling, [name]: value });
  };



  const updatePayment = () => {
    BillingDataService.StatusChange(currentBilling.billId)
      .then(response => {
        console.log(response.data);
        setMessage("The Billing was updated successfully!");
        history.push("/BillingDetails")
      })
      .catch(e => {
        console.log(e);
      });
  };
  // const deleteBilling = () => {
  //   BillingDataService.remove(currentBilling.billId)
  //     .then(response => {
  //       console.log(response.data);
  //       props.history.push("/Billing");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };
  return (
    <div className="col-md-12">
      <div className="card card-container">
      <div>
      {currentBilling ? (
        <div className="edit-form">
          <h4>payment</h4>
          <form>
            <div className="form-group">
            <label htmlFor="billId">Bill Id</label>
            <input
              type="text"
              className="form-control"
              id="billId"
              required
              value={currentBilling.billId}
              onChange={handleInputChange}
              name="billId"
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">cardNumber</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              required              
              onChange={handleInputChange}
              name="cardNumber"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expDate">Exp Date</label>
            <input
              type="text"
              className="form-control"
              id="expDate"
              //required              
              onChange={handleInputChange}
              name="expDate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">cvv</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              //required              
              name="cvv"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">dAmount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              //required
              value={currentBilling.amount}
              onChange={handleInputChange}
              name="amount"
              disabled
            />
          </div>
          
          </form>          
          <button
            type="submit"
            className="btn btn-primary"
            onClick={updatePayment}
          >
            Pay Now
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Billing...</p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};
export default Billing;