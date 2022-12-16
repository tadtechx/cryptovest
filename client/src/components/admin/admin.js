
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import style from './transfer.css';





import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


const linkStyle = {
  textDecoration: 'none',
  color: 'rgb(0, 102, 255)'
}

class Admin extends Component {
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

    console.log(this.props.auth);

    return (
      <div className="dashboard">

        <div className="profile">
          {/* <img src={avatar} alt="avatar" /> */}
          <div>
            <h2>Admin Dashboard</h2>
            {/* <p>Hi, {user.name.split(" ")[0]}. Welcome to your dashboard.</p> */}
          </div>
        </div>

        <div className="dashbody">
          {/* <div className="balance">
            <span><h3>Balance</h3> <button><Link style={linkStyle} to='/transfer'>Send to User</Link></button></span>
            <br />
            <p>${500000}</p>
          </div> */}


          <div className="balance adm">
            <span><h3>All Users</h3> <button><Link style={linkStyle} to='/allusers'>Get all users</Link></button></span>
            <br />
            <p>Get user data and send money to users here...</p>
          </div>

          <div className="balance adm">
            <span><h3>Transactions</h3> <button><Link style={linkStyle} to='/alltransactions'>View Transactions</Link></button></span>
            <br />
            <p>View all transactions here...</p>
          </div>

          {/* <div className="balance">
            <span><h3>Total Sent</h3> <button><Link style={linkStyle} to='/alltransactions'>View Transactions</Link></button></span>
            <br />
            <p>$1200</p>
          </div> */}



          {/* <div className="balance">
            <h3>Available Profit</h3> <br />
            <p>$0</p>
          </div> */}
         
        </div>

      </div>
    );
  }
}

Admin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Admin);
