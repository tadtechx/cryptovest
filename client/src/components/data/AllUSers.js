
import React, { Component } from "react";
import axios from "axios";

import { getUsers } from "../../actions/getUsers";



// Style
import style from "./data.css";


function AllUsers() {
  return (
    <div className="transactions">
      <table>
        <tr>
          <th>User Email</th>
          <th>Name</th>
          <th>Date Registered</th>
          <th>Balance</th>
          <th>Send Money</th>
        </tr>
        <tr>
          <td>greatone@email.com</td>
          <td>Great One</td>
          <td>11/12/2022</td>
          <td>${120}</td>
          <td><button className="transfer">Send Funds</button></td>
          
        </tr>
        <tr>
          <td>greatone@email.com</td>
          <td>Great One</td>
          <td>11/12/2022</td>
          <td>${120}</td>
          <td><button className="transfer">Send Funds</button></td>
          
        </tr>
        <tr>
          <td>greatone@email.com</td>
          <td>Great One</td>
          <td>11/12/2022</td>
          <td>${120}</td>
          <td><button className="transfer">Send Funds</button></td>
          
        </tr>
        
      </table>


      <button onClick={() =>
        getUsers()
      }>
        <h1>Get Them</h1>
      </button>
    </div>
  );
}

export default AllUsers;
