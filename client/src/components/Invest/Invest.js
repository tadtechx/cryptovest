
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userDeposit } from "../../actions/fundActions";
import classnames from "classnames";
import axios from "axios";

// Style
import './invest.css';

//Images
// import bitcoin from './assets/bitcoin.png';
// import bnb from './assets/bnb.png';
// import eth from './assets/eth.png';
// import lite from './assets/lite.png';
// import usdt from './assets/usdt.png';



const plans = [
    { id: 1, name: "Starter", refbonus: 7, duration: 12, roi: 144, min: 50, max: 499 },
    { id: 2, name: "Bronze", refbonus: 7, duration: 25, roi: 350, min: 500, max: 4999 },
    { id: 3, name: "Silver", refbonus: 7, duration: 43, roi: 731, min: 5000, max: 19999 },
    { id: 4, name: "Diamond", refbonus: 7, duration: 60, roi: 1200, min: 20000, max: 49999 },
    { id: 5, name: "Gold", refbonus: 7, duration: 60, roi: 1380, min: 50000, max: 90000 },
    { id: 6, name: "Promo", refbonus: 50, duration: 7, roi: 315, min: 11000, max: 1000000 },

]



// console.log(theMethod[0].address);


const linkStyle = {
    textDecoration: 'none',
    color: "unset",
};


class Invest extends Component {

    constructor() {
        super();
        this.state = {
            whichPlan: plans[0],
            thisUserHasAPlan: false,
        }
    };

    onChange2 = e => {
        this.setState({ [e.target.id]: e.target.value });
        console.log(this.state.thisUserHasAPlan)
    };


    render() {

        const onSubmit = e => {
            e.preventDefault();

            if ((this.state.amount < this.state.whichPlan.min) || (this.state.amount > this.state.whichPlan.max)) {
                alert(`Enter amount within $${this.state.whichPlan.min} and $${this.state.whichPlan.max}`)
            } else if (this.state.amount > this.state.thisUserBalance) {
                alert(`Insufficient Funds`)
            } else if(this.state.thisUserHasAPlan) {
                alert(`You already have a plan`)
            }
            
            else {
                axios.post("/api/users/newinvestment",
                {   email: this.props.auth.user.email,
                    roi: this.state.whichPlan.roi,
                    invested: parseInt(this.state.amount),
                    bonus: this.state.whichPlan.refbonus,
                    duration: this.state.whichPlan.duration })
                    .then(console.log("this worked")
                    )
                    .catch(err => {
                        console.log(err.response.data);
                    });

            }

        };



        const onChange = e => {
            this.setState({
                whichPlan: plans.filter(obj => {
                    return obj.name === e.target.value;
                })[0]
            });

        };

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
            <div className="invest">

                <div className="invest-form">
                    <div className="modal-head">
                        <h3>Choose a plan</h3>
                        {/* <p style={{ cursor: 'pointer' }}>&#10006;</p> */}
                    </div>
                    <br />



                    <br /> <br />
                    <form noValidate onSubmit={onSubmit}>
                        <select onChange={onChange}>
                            {plans.map(eachPlan => {
                                return (
                                    <option value={eachPlan.name}>{eachPlan.name}</option>
                                )
                            })}
                        </select>

                        <br /> <br /> <br />

                        <h3>Plan Details</h3> <br />
                        <h4>Plan Name: <span className="vest">{this.state.whichPlan.name} Plan</span></h4>
                        <div className="p-details">
                            <div>
                                <h5>Bonus:</h5>
                                <p>{this.state.whichPlan.refbonus}%</p>
                            </div>
                            <div>
                                <h5>Duration:</h5>
                                <p>{this.state.whichPlan.duration} Days</p>
                            </div>
                            <div>
                                <h5>Return:</h5>
                                <p>{this.state.whichPlan.roi}%</p>
                            </div>
                        </div>


                        <br /> <br />

                        <h3>Your balance:</h3>
                        <p>${this.state.thisUserBalance}</p>

                        <br /> <br />

                        <input
                            type="email"
                            placeholder='Enter email'
                            onChange={this.onChange}
                            id="email"
                            value={this.props.auth.user.email}
                            readOnly
                            style={{ backgroundColor: "lightgrey", border: "1px solid black" }}
                        ></input> <br /> <br />


                        <label><b>Investment Amount</b></label>
                        <input
                            type="number"
                            placeholder={`$${this.state.whichPlan.min} - $${this.state.whichPlan.max}`}
                            id="amount"
                            onChange={this.onChange2}
                            value={this.state.amount}
                            max={this.state.whichPlan.min}
                            min={this.state.whichPlan.max}
                            required
                        ></input> <br />

                        <br />

                        <br /> <br />
                        <button className="fundacc">Invest</button> <br />
                    </form>
                    <br /><br />

                </div>
            </div>
        );
    }
}

Invest.propTypes = {
    userDeposit: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    auth: state.auth,
});


// export default Deposit;

export default connect(
    mapStateToProps,
    { userDeposit }
)(withRouter(Invest));
