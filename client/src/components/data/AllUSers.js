
import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";



// Style
import style from "./data.css";



axios.defaults.baseURL = "http://127.0.0.1:5000";


class AllUsers extends Component {


  constructor() {
    super();
    this.state = {
      allRegistered: [],
      modal: false, modal2: false,
      receiver: "bush7@gmail.com",
      amount: 0,
    };
  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };





  render() {

    const getUsers = () => {
      axios.get("api/users/fetchusers")
        // .then(response => console.log(response))
        .then((response) => {
          //  const allRegistered = response.data;
          this.setState({ allRegistered: response.data });
        })
        .catch(err => {
          console.log(err.response.data);
        });

    };

    getUsers();



    const sendFunds = () => {
      axios.post("/api/users/sendmoney", {email: this.state.receiver, amount: parseInt(this.state.amount)})
        .then(console.log("this worked")
        )
        .catch(err => {
          console.log(err.response.data);
        });

        closeModal();
    };






    const sendModal = (b) => {


      this.setState({
        modal: true,
        receiver: b,

      })

    };

    const closeModal = () => {
      this.setState({ modal: false })
      this.setState({ modal2: true })
    };
    return (
      <div className="transactions">
        {/* <button onClick={sendFunds}>ygyfgyfhu</button> */}
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
                <td>{eachUser.date.slice(0, 10)}</td>
                <td>${eachUser.balance}</td>
                <td><button onClick={() => sendModal(eachUser.email)} className="transfer">Send Funds</button></td>
              </tr>
            )
          })}

        </table>


        <div className="confirm-modal"
          style={{ transform: this.state.modal ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
        >
          <div className="modal-head">
            <h2>Send Funds to {this.state.receiver}?</h2>
            <p onClick={closeModal} style={{ cursor: 'pointer' }}>&#10006;</p>
          </div>
          <br />
          <form>
            <input
            type="number"
            placeholder="$ Amount"
            id="amount"
            onChange={this.onChange}
            value={this.state.amount}
            
            ></input> <br /> <br />
          </form>
          <button className="transfer" onClick={sendFunds}>Send</button>
          <br /> <br />


        </div>

        <div className="confirm-modal modal2"
                    style={{ transform: this.state.modal2 ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
                >
                    <div className="modal-head">
                        <h3></h3><p onClick={()=>{this.setState({ modal2: false });}} style={{cursor: 'pointer'}}>&#10006;</p>
                    </div>
                    <br/>
                    <h2>Funds Sent</h2> <br/>
                    <h1>&#9989;</h1> <br/>
                    {/* <p>Wait for approval....</p> */}
                </div>

      </div>
    );
  }
}

export default AllUsers;
