
import React, { Component } from "react";
import axios from "axios";

// import { getUsers } from "../../actions/getUsers";



// Style
import style from "./data.css";






class AllUsers extends Component {
 

  constructor() {
    super();
    this.state = { allRegistered: []};
  }

  

  render(){

    const getUsers = () => {
      axios.get("api/users/fetchusers")
        // .then(response => console.log(response))
        .then((response) => {
        //  const allRegistered = response.data;
        this.setState({ allRegistered: response.data});
        });
  
    };

    getUsers()
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
        {this.state.allRegistered.map(eachUser => {
          return (
            <tr>
              <td>{eachUser.email}</td>
              <td>{eachUser.name}</td>
              <td>{eachUser.date.slice(0,10)}</td>
              <td>${eachUser.balance}</td>
              <td><button className="transfer">Send Funds</button></td>
            </tr>
          )
        })}

        {/* <tr>
          <td>greatone@email.com</td>
          <td>Great One</td>
          <td>11/12/2022</td>
          <td>${120}</td>
          <td><button className="transfer">Send Funds</button></td>

        </tr>*/}

      </table>


      {/* <button onClick={() =>
        getUsers()
      }>
        <h1>Get Them</h1>
      </button> */}
      
    </div>
  );}
}

export default AllUsers;
