import React, { Component }  from 'react';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import classnames from "classnames";

import { Link } from 'react-router-dom';

// Style
import style from './layout.css';


import logo from "./logo1.jpg";


class Navigation extends Component {


constructor () {
  super();
  this.state = {openMobile: false, blacknav: true};
}
  

render() {
   const onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  }

 const openMenu = () => {
if (!this.state.openMobile) {
    this.setState({openMobile: true});}
    else {
      this.setState({openMobile: false});
      window.scroll(0,0)
    }
    };

  const closeMenu = () => {
      this.setState({openMobile: false});
      window.scroll(0,0);
      
    }




    window.onscroll = () => {
      if (window.pageYOffset > 10) {
        this.setState({blacknav: false})
      } else {
        this.setState({blacknav: true})
      }
    }


const linkStyle = {
    textDecoration: 'none',
    color: "unset"
  };

  return (
    <div className="navigation">


    <nav style={{backgroundColor: this.state.blacknav? "" : "black"}}>
        <h2><Link style={linkStyle} to='/' onClick={closeMenu}>
        {/* <img style={{height: "40px"}} src={logo}></img> */}
        Crypto<span className='vest'>Vest</span>
        </Link></h2>
        <ul className='bignav'>
            <li><Link style={linkStyle} to='/dashboard'>
             
              Dashboard
              </Link></li>

            <li><Link style={linkStyle} to='/about'>About</Link></li>
            <li><Link style={linkStyle} to='/contact'>Contact</Link></li>
            <li><Link style={linkStyle} to='/login'> <button style={{display: this.props.auth.isAuthenticated? "none" : "block"}}>Login</button></Link></li>
            <li><Link style={linkStyle} to="/register"> <button style={{display: this.props.auth.isAuthenticated? "none" : "block"}}>Register</button></Link></li>
            <li><Link style={linkStyle} to=""> <button onClick={onLogoutClick} style={{display: this.props.auth.isAuthenticated? "block" : "none"}}>Log Out</button></Link></li>
            <li><Link style={linkStyle} to="/admin"> <button style={{display: this.props.auth.user.email === "CRYPTOVEST716@GMAIL.COM"? "block" : "none"}}>Admin</button></Link></li>
        </ul>

        <div 
        className={this.state.openMobile ? 'mobilemenu-on' : 'mobilemenu'} onClick={openMenu}
        >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </nav>

    <div>
    <ul className='smallnav' 
    style={{transform: this.state.openMobile ? 'translateX(0%)' : 'translateX(-100%)'}}
    >
            <li><Link style={linkStyle} to='/dashboard' onClick={closeMenu}> Dashboard</Link></li>
            {/* <li>&#127968; Home</li> */}
            <li><Link style={linkStyle} to='/about' onClick={closeMenu}> About</Link></li>
            <li><Link style={linkStyle} to='/contact' onClick={closeMenu}> Contact</Link></li>
            <li><Link style={linkStyle} to='/invest' onClick={closeMenu}> Invest</Link></li>
            <li><Link style={linkStyle} to='/login' onClick={closeMenu}> <button style={{display: this.props.auth.isAuthenticated? "none" : "block"}}>Login</button></Link></li>
            <li><Link style={linkStyle} to="/register" onClick={closeMenu}> <button style={{display: this.props.auth.isAuthenticated? "none" : "block"}}>Register</button></Link></li>
            <li><Link style={linkStyle} to="" onClick={closeMenu}> <button onClick={onLogoutClick} style={{display: this.props.auth.isAuthenticated? "block" : "none"}}>Log Out</button></Link></li>
            <li><Link style={linkStyle} to="/admin" onClick={closeMenu}> <button style={{display: this.props.auth.user.email === "CRYPTOVEST716@GMAIL.COM"? "block" : "none"}}>Admin</button></Link></li>

        </ul>
    </div>

    </div>
  );}
}


// export default Navigation;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);