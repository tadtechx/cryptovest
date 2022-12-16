
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


import axios from "axios";


// Style
// import style from "./data.css";






class UserTxn extends Component {
 

  constructor() {
    super();
    this.state = {allDeposits: []};
  }

  

  render(){
    const { user } = this.props.auth;

    const getTransactions = () => {
      axios.get("api/transactions/fetchtransactions")
        // .then(response => console.log(response.data.filter(forThisUser=>{return forThisUser.email === user.email})))
        .then((response) => {
        this.setState({ allDeposits: response.data.filter(forThisUser=>{return forThisUser.email === user.email})});
        });
  
    };

    getTransactions()
  return (
    <div className="transactions"
    style={{backgroundColor: "white"}}
    >
        <h4>My Transactions</h4> <br/> <br/>
      <table>
        <tr>
          <th>Transaction ID</th>
          <th>Method</th>
          <th>Amount</th>
          <th>Date</th>
          {/* <th>Status</th> */}
        </tr>
        {this.state.allDeposits.map(eachTxn => {
          return (
            <tr>
              <td>{eachTxn._id.split("").reverse().join("")}</td>
              <td>{eachTxn.method}</td>
              <td>${eachTxn.amount}</td>
              <td>{eachTxn.date.slice(0,10)}</td>
              {/* <td><button className={eachTxn.isSuccessful? "success" : "pending"}> */}
                {/* {eachTxn.isSuccessful? "Successful" : "Pending"} */}
                {/* </button></td> */}
            </tr>
          )
        })}
       
      </table>
    </div>
  );}
}

UserTxn.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
  )(UserTxn);

// export default UserTxn;
