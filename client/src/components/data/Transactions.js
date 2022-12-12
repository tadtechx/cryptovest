
import React, { Component } from "react";


// Style
import style from "./data.css";


function TransactionData() {
  return (
    <div className="transactions">
      <table>
        <tr>
          <th>Transaction ID</th>
          <th>Method</th>
          <th>User Email</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>21558704</td>
          <td>BTC</td>
          <td>greatone@email.com</td>
          <td>11/12/2022</td>
          <td><button className="success">Successful</button></td>
          
        </tr>
        <tr>
          <td>21538704</td>
          <td>ETH</td>
          <td>taddtch@email.com</td>
          <td>01/09/2022</td>
          <td><button className="fail">Failed</button></td>
          
        </tr>
        <tr>
          <td>96558704</td>
          <td>LTC</td>
          <td>fredbrick@yahoo.com</td>
          <td>25/10/2022</td>
          <td><button className="pending"></button></td>
          
        </tr>
      </table>
    </div>
  );
}

export default TransactionData;
