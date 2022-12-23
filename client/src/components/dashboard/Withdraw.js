
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import classnames from "classnames";

// import formspree from '@formspree/react';

const linkStyle = {
    textDecoration: 'none',
    color: "unset",
};


class Withdraw extends Component {

    constructor() {
        super();
        this.state = {
            // modal2: false,
            amount: 0,
            network: "",
            email: "",
            address: "",
        }
    };

    

    // const [state, handleSubmit] = useForm("mrgvzaoe");


    onSubmit = e => {
        // e.preventDefault();

        // if (this.state.amount > this.state.thisUserBalance){
        //     alert("Insufficient Balance")
        // }

        // else if ((this.state.amount === 0) || (this.state.amount === "0")) {
        //     alert("Enter an amount above 0")
        // }

        // else  {
        // this.setState({ modal2: true });
        // }

        fetch("/send", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(res=>res.json())
        .then(data=>{
        alert(data.message)
        this.setState({amount: ""});
        this.setState({network: ""});
        this.setState({email: ""});
        this.setState({address: ""});
        }).catch(err=>{
        console.log(err)
        })
        }
    
    



    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
        this.setState({ email: this.props.auth.user.email });
        console.log(this.state)
    };

    render() {



        const getBalance = () => {
            axios.get("api/users/fetchusers")
                // .then(response => console.log(response.data.filter(forThisUser=>{return forThisUser.email === user.email})[0].balance))
                .then((response) => {
                    this.setState({ thisUserBalance: response.data.filter(forThisUser => { return forThisUser.email === this.props.auth.user.email })[0].balance });
                    this.setState({ thisUserHasAPlan: response.data.filter(forThisUser => { return forThisUser.email === this.props.auth.user.email })[0].hasAPlan });
                });

        };

        getBalance()


        return (
            <div className="deposit">



                <div className="confirm-modal invest-form"
                    style={{ position: "static", transform: "translateX(0)", margin: "0 auto" }}
                >
                    <div className="modal-head">
                        <h3>Withdrawal</h3>
                        {/* <p style={{cursor: 'pointer'}}>&#10006;</p> */}
                    </div>
                    <br />

                    <br /> <br />
                    <form noValidate
                        onSubmit={this.onSubmit}
                    // action="https://formspree.io/f/mrgvzaoe"
                    // method="POST"
                    >

                        <h4>Amount</h4>
                        <input
                            type="number"
                            placeholder='$'
                            id="amount"
                            onChange={this.onChange}
                            value={this.state.amount}
                            name="Amount"
                        ></input> <br /> <br /> <br />

                        <h4>Network</h4>
                        <select
                        name="network"
                        onChange={this.onChange}
                        value={this.state.network}
                        id="network"
                        >
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Ethereum</option>
                            <option value="BNB">BNB</option>
                            <option value="LTC">Litecoin</option>
                            <option value="USDT">USDT</option>
                        </select> <br /> <br /> <br />


                        {/* <h4>Email</h4> */}
                        <input
                            type="text"
                            placeholder='Enter Crypto Address'
                            // onChange={this.onChange}
                            name="email"
                            id="email"
                            value={this.props.auth.user.email}
                            required
                            style={{ display: "none" }}
                        ></input>

                        <h4>Withdrawal Details</h4>
                        <input
                            type="text"
                            placeholder='Enter Crypto Address'
                            onChange={this.onChange}
                            name="address"
                            id="address"
                            required
                            style={{ border: "1px solid black" }}
                        ></input> <br /> <br /> <br />


                        <br /> <br />
                        <button
                            className="fundacc"
                            onClick={() => { }}
                            type="submit"
                        // disabled={state.submitting}
                        >Withdraw</button> <br />
                    </form>
                    <br /><br />
                    {/* <b><center>Charge: 0.02% + 2 USD</center></b> */}
                </div>
                <div className="confirm-modal modal2"
                    style={{ transform: this.state.modal2 ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
                >
                    <div className="modal-head">
                        <h3></h3><p onClick={() => { this.setState({ modal2: false }); }} style={{ cursor: 'pointer' }}>&#10006;</p>
                    </div>
                    <br />
                    <h3>Withdrawal Request Sent </h3> <br />
                    <h1>&#9989;</h1> <br />
                    <p>Wait for approval....</p>
                </div>
            </div>
        );
    }
};

Withdraw.propTypes = {
    userDeposit: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    auth: state.auth,
});


// export default Deposit;

export default connect(
    mapStateToProps,

)(withRouter(Withdraw));

