import React, { Component }  from 'react';


// Style
import './layout.css';

function Footer() {
  return (
    <div className="footer">

    <div className="footer-logo">
        <h2>Crypto<span className='vest'>vest</span></h2>
        
    </div>

    <br />

        <ul>
            <li>Privacy and Policy</li>
            <li>Terms & Condition</li> <br/>
            <li>AML Policy</li>
            <li>Buy Crypto</li>
            <li>Help Center</li>
        </ul>

        <br />

        <div className="reserved">
            <p>&copy;2018-2022 Cryptovest All Rights Reserved</p>
            <br />
            <p>26A Dacre Road, Hitchin Hertfordshire, United Kingdom - SG5 1QJ</p>
        </div>
        <div className="socials">

        </div>

    </div>
  );
}

export default Footer;
