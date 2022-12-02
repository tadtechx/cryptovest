
import React, { Component } from "react";
import { Link } from "react-router-dom";


// Style
import './deposit.css';

//Images
import bitcoin from './assets/bitcoin.png';
import bnb from './assets/bnb.png';
import eth from './assets/eth.png';
import lite from './assets/lite.png';
import usdt from './assets/usdt.png';

function Deposit() {


    const linkStyle = {
        textDecoration: 'none',
        color: "unset",
        // marginLeft: "200px"
    };


    return (
        <div className="deposit">

            <div className="dashbody">
                <div className="balance">
                    <span><img src={bitcoin}></img>
                    <h3>Bitcoin</h3></span>
                    <button><Link style={linkStyle} to='/addfunds'>Deposit</Link></button>
                </div>
                <div className="balance">
                    <span><img src={bnb}></img>
                    <h3>BNB</h3></span>
                    <button><Link style={linkStyle} to='/addfunds'>Deposit</Link></button>
                </div>
                <div className="balance">
                    <span><img src={eth}></img>
                    <h3>Ethereum</h3></span>
                    <button><Link style={linkStyle} to='/addfunds'>Deposit</Link></button>
                </div>
                <div className="balance">
                    <span><img src={lite}></img>
                    <h3>Litecoin</h3></span>
                    <button><Link style={linkStyle} to='/addfunds'>Deposit</Link></button>
                </div>
                <div className="balance">
                    <span><img src={usdt}></img>
                    <h3>USDT</h3></span>
                    <button><Link style={linkStyle} to='/addfunds'>Deposit</Link></button>
                </div>
                
            </div>
        </div>
    );
}

export default Deposit;
