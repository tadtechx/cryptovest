
import React, { Component } from "react";
import axios from "axios";


// Style
import style from "./data.css";






class TransactionData extends Component {
 

  constructor() {
    super();
    this.state = {allDeposits: []};
  }

  

  render(){

    const getTransactions = () => {
      axios.get("api/transactions/fetchtransactions")
        // .then(response => console.log(response))
        .then((response) => {
        this.setState({ allDeposits: response.data});
        });
  
    };

    getTransactions()
  return (
    <div className="transactions">
      <table>
        <tr>
          <th>Transaction ID</th>
          <th>Method</th>
          <th>User Email</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        {this.state.allDeposits.map(eachTxn => {
          return (
            <tr>
              <td>{eachTxn._id.split("").reverse().join("")}</td>
              <td>BTC</td>
              <td>{eachTxn.email}</td>
              <td>${eachTxn.amount}</td>
              <td>{eachTxn.date.slice(0,10)}</td>
              <td><button className={eachTxn.isSuccessful? "success" : "pending"}>
                {/* {eachTxn.isSuccessful? "Successful" : "Pending"} */}
                </button></td>
            </tr>
          )
        })}
        <tr>
          <td>21558704</td>
          <td>BTC</td>
          <td>greatone@email.com</td>
          <td>${30}</td>
          <td>11/12/2022</td>
          <td><button className="success">Successful</button></td>
          
        </tr>
        <tr>
          <td>21538704</td>
          <td>ETH</td>
          <td>taddtch@email.com</td>
          <td>${21}</td>
          <td>01/09/2022</td>
          <td><button className="fail">Failed</button></td>
          
        </tr>
       
      </table>
    </div>
  );}
}

export default TransactionData;
