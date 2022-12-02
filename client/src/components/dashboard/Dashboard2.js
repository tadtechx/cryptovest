
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import './dashboard.css';

import avatar from './assets/profile.png';

// import  downn from './assets/downner.png'


// function Dashboard() {

//   const [checked, setChecked] = useState(0);
//   const [isOpen, setisOpen] = useState(0);




//   const toggleChecked = (a) => {
//       setChecked(value => a);

//       if (checked === a && isOpen === a) {
//           setisOpen(value => 0);

//           // setisOpen(value => a);
//       }
//       else {
//           setisOpen(value => a);
//       }


//   }

  // const linkStyle = {
  //   textDecoration: 'none',
  //   color: 'rgb(0, 102, 255)'
  // }

//   return (
    // <div className="dashboard">

    // <div className="profile">
    //   <img src={avatar} alt="" />
    //   <div>
    //     <h4>James Mark</h4>
    //     <p>Hi, James1121. Welcome to your dashboard.</p>
    //   </div>
    // </div>

    // <div className="dashbody">
    //   <div className="balance">
    //     <span><h3>Balance</h3> <button><Link style={linkStyle} to='/deposit'>Add funds</Link></button></span>
    //     <br />
    //     <p>$35</p>
    //   </div>
    //   <div className="balance">
    //     <h3>Available Profit</h3> <br />
    //     <p>$35</p>
    //   </div>
    //   <div className="balance">
    //     <h3>Total Profit</h3> <br />
    //     <p>$35</p>
    //   </div>
    //   <div className="balance">
    //     <h3>Investment Bonus</h3> <br />
    //     <p>$35</p>
    //   </div>
    // </div>

    // <div className="dropdowns">
    //   <div className='stand' onClick={() => toggleChecked(1)} style={{height: isOpen === 1 ? '190px' :'60px'}}>
    //     <p><span>&#8644; Standard Investment </span> <img src={downn}></img></p> <br /> <br />
    //     <p>With our low risk plans, easy access to profit, recurring capital.</p> <br />
    //     <button>Investment Plans </button>
    //   </div>
    //   <div className='stand' onClick={() => toggleChecked(2)} style={{height: isOpen === 2 ? '190px' :'60px'}}>
    //     <p><span>&#x1f512; Two Factor Authentication </span> <img src={downn}></img></p> <br /> <br />
    //     <p>With our low risk plans, easy access to profit, recurring capital.</p> <br />
    //     <button>Investment Plans </button>
    //   </div>
    // </div>

    // </div>
//   );
// }

// export default Dashboard;


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

  render() {
    const { user } = this.props.auth;

    return (
      <div className="dashboard">

      <div className="profile">
        <img src={avatar} alt="avatar" />
        <div>
          <h4>{user.name}</h4>
          <p>Hi, {user.name.split(" ")[0]}. Welcome to your dashboard.</p>
        </div>
      </div>
  
      <div className="dashbody">
        <div className="balance">
          <span><h3>Balance</h3> <button><Link style={linkStyle} to='/addfunds'>Add funds</Link></button></span>
          <br />
          <p>$35</p>
        </div>
        <div className="balance">
          <h3>Available Profit</h3> <br />
          <p>$35</p>
        </div>
        <div className="balance">
          <h3>Total Profit</h3> <br />
          <p>$35</p>
        </div>
        <div className="balance">
          <h3>Investment Bonus</h3> <br />
          <p>$35</p>
        </div>
      </div>

      <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
  
      {/* <div className="dropdowns">
        <div className='stand' onClick={() => toggleChecked(1)} style={{height: isOpen === 1 ? '190px' :'60px'}}>
          <p><span>&#8644; Standard Investment </span> <img src={downn}></img></p> <br /> <br />
          <p>With our low risk plans, easy access to profit, recurring capital.</p> <br />
          <button>Investment Plans </button>
        </div>
        <div className='stand' onClick={() => toggleChecked(2)} style={{height: isOpen === 2 ? '190px' :'60px'}}>
          <p><span>&#x1f512; Two Factor Authentication </span> <img src={downn}></img></p> <br /> <br />
          <p>With our low risk plans, easy access to profit, recurring capital.</p> <br />
          <button>Investment Plans </button>
        </div>
      </div> */}
  
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
