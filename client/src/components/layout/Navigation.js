import React, { Component }  from 'react';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import classnames from "classnames";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';

// Style
import style from './layout.css';

function Navigation(props) {


  // const [openMobile, setopenMobile] = useState(true);
  // const openMenu = () => {
  //   setopenMobile(value => !value);
  // };

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };

  const linkStyle = {
    textDecoration: 'none',
    color: "unset"
  };

  return (
    <div className="navigation">

    <nav>
        <h2><Link style={linkStyle} to='/'>Crypto<span className='vest'>Vest</span></Link></h2>
        <ul className='bignav'>
            <li><Link style={linkStyle} to='/dashboard'>
              {/* &#128100; */}
              Dashboard
              </Link></li>
            <li>Home</li>
            <li><Link style={linkStyle} to='/about'>About</Link></li>
            <li><Link style={linkStyle} to='/contact'>Contact</Link></li>
            <li><Link style={linkStyle} to='/login'> <button style={{display: props.auth.isAuthenticated? "none" : "block"}}>Login</button></Link></li>
            <li><Link style={linkStyle} to="/register"> <button style={{display: props.auth.isAuthenticated? "none" : "block"}}>Register</button></Link></li>
            <li><Link style={linkStyle} to=""> <button onClick={onLogoutClick} style={{display: props.auth.isAuthenticated? "block" : "none"}}>Log Out</button></Link></li>
        </ul>

        {/* <div 
        // className={openMobile ? 'mobilemenu' : 'mobilemenu-on'} onClick={openMenu}
        >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div> */}
    </nav>

    <div>
    <ul className='smallnav' 
    // style={{transform: openMobile ? 'translateX(-100%)' : 'translateX(0%)'}}
    >
            <li><Link style={linkStyle} to='/dashboard'>&#128100; Dashboard</Link></li>
            <li>&#127968; Home</li>
            <li><Link style={linkStyle} to='/about'>&#128101; About</Link></li>
            <li><Link style={linkStyle} to='/contact'>&#128222; Contact</Link></li>
            <li><Link style={linkStyle} to='/signin'> <button>Login</button></Link></li>
            <li><Link style={linkStyle} to='/signup'> <button>Register</button></Link></li>
        </ul>
    </div>

    </div>
  );
}


// export default Navigation;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);