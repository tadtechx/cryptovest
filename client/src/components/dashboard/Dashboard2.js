
import { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

// Style
import './dashboard.css';

import avatar from './assets/profile.png';

import downn from './assets/downner.png';



import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


import UserTxn from './UserTxns';


const linkStyle = {
  textDecoration: 'none',
  color: 'rgb(0, 102, 255)'
}

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  constructor() {
    super();
    this.state = {
      checked: 0,
      isOpen: 0,
      thisUserBalance: 0,
      thisUserDueDate: "",
      thisUserInvested: 0,
      thisUserRoi: 0,
      thisUserBonus: 0,
    };
  }

  render() {
    const { user } = this.props.auth;

    const toggleChecked = (a) => {

      this.state.checked = a;

      if (this.state.checked === a && this.state.isOpen === a) {
        this.setState({ isOpen: 0 });
      }
      else {
        this.setState({ isOpen: a });
      }
    }

    const getBalance = () => {
      axios.get("api/users/fetchusers")
        // .then(response => console.log(response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].balance))
        .then((response) => {
        this.setState({ thisUserBalance: response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].balance});
        this.setState({ thisUserInvested: response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].invested});
        this.setState({ thisUserRoi: response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].roi});
        this.setState({ thisUserBonus: response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].bonus});
        this.setState({ thisUserDueDate: response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].investdate});
        });
  
    };

    getBalance()

    return (
      <div className="dashboard">

        <div className="profile">
          {/* <img src={avatar} alt="avatar" /> */}
          <div>
            <h4>{user.name}</h4> <br/>
            <p>Hi, {user.name.split(" ")[0]}. Welcome to your dashboard.</p>
          </div>
        </div>

        <div className="dashbody">
          <div className="balance">
            <span><h3>Balance</h3> <button><Link style={linkStyle} to='/addfunds'>Add funds</Link></button></span>
            <br />
            <span><p>${this.state.thisUserBalance}</p> <button><Link style={linkStyle} to='/withdraw'>Withdrawal</Link></button></span>
            
          </div>
          <div className="balance">
            
            <span><h3>Available Profit</h3> <button><Link style={linkStyle} to='/invest'>Invest</Link></button></span>
            <br/>
            <p>${0}</p> <br/>
            {/* <p><b>Due Date:</b> {this.state.thisUserDueDate.slice(0,10)}</p> */}
          </div>
          <div className="balance">
            <h3>Total Profit</h3> <br />
            <p>
            {Number.isNaN(this.state.thisUserInvested * (this.state.thisUserRoi/100))? `$0`:
              `$${Math.floor(this.state.thisUserInvested * (this.state.thisUserRoi/100))}`
            } 
              </p>
          </div>
          <div className="balance">
            <h3>Investment Bonus</h3> <br />
            <p>
            {Number.isNaN(this.state.thisUserInvested * (this.state.thisUserBonus/100))? `$0`:
              `$${Math.floor(this.state.thisUserInvested * (this.state.thisUserBonus/100))}`
            } 
              </p>
          </div>
        </div>

        <UserTxn/>


        <div className="dropdowns">
          <div className='stand' onClick={() => toggleChecked(1)} style={{ height: this.state.isOpen === 1 ? '190px' : '60px' }}>
            <p><span>&#8644; Standard Investment </span> <img src={downn}></img></p> <br /> <br />
            <p>With our low risk plans, easy access to profit, recurring capital.</p> <br />
            <button>Investment Plans </button>
          </div>
          <div className='stand' onClick={() => toggleChecked(2)} style={{ height: this.state.isOpen === 2 ? '190px' : '60px' }}>
            <p><span>&#x1f512; Two Factor Authentication </span> <img src={downn}></img></p> <br /> <br />
            <p>With our low risk plans, easy access to profit, recurring capital.</p> <br />
            <button>Investment Plans </button>
          </div>
        </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
