
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import './dashboard.css';

import avatar from './assets/profile.png';

import downn from './assets/downner.png';



import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


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
    this.state = { checked: 0, isOpen: 0 };
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

    return (
      <div className="dashboard">

        <div className="profile">
          {/* <img src={avatar} alt="avatar" /> */}
          <div>
            <h4>{user.name}</h4>
            <p>Hi, {user.name.split(" ")[0]}. Welcome to your dashboard.</p>
          </div>
        </div>

        <div className="dashbody">
          <div className="balance">
            <span><h3>Balance</h3> <button><Link style={linkStyle} to='/addfunds'>Add funds</Link></button></span>
            <br />
            <p>${user.balance}</p>
          </div>
          <div className="balance">
            
            <span><h3>Available Profit</h3> <button><Link style={linkStyle} to='/invest'>Invest</Link></button></span>
            <p>$0</p>
          </div>
          <div className="balance">
            <h3>Total Profit</h3> <br />
            <p>$0</p>
          </div>
          <div className="balance">
            <h3>Investment Bonus</h3> <br />
            <p>$0</p>
          </div>
        </div>


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
