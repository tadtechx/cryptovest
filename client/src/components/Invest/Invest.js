
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userDeposit } from "../../actions/fundActions";
import classnames from "classnames";

// Style
import './invest.css';

//Images
// import bitcoin from './assets/bitcoin.png';
// import bnb from './assets/bnb.png';
// import eth from './assets/eth.png';
// import lite from './assets/lite.png';
// import usdt from './assets/usdt.png';



const plans = [
    { id: 1, name: "Starter", refbonus: 7, duration: 12, roi: 144, min: "50", max: "499" },
    { id: 2, name: "Bronze", refbonus: 7, duration: 25, roi: 350, min: "500", max: "4,999" },
    { id: 3, name: "Silver", refbonus: 7, duration: 43, roi: 731, min: "5,000", max: "19,999" },
    { id: 4, name: "Diamond", refbonus: 7, duration: 60, roi: 1200, min: "20,000", max: "49,999" },
    { id: 5, name: "Gold", refbonus: 7, duration: 60, roi: 1380, min: "50,000", max: "90,000" },
    { id: 6, name: "Promo", refbonus: 50, duration: 7, roi: 315, min: "11,000", max: "1,000,000" },

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
            whichPlan: plans[1],
        }
    };

    // onChange = e => {
    //     // this.setState({ whichPlan: e.target.value });
    //     console.log(e.target.value)
    // };


    render() {
        // const payModal = (b) => {


        //     this.setState({
        //     })
        //     console.log(this.props.auth.user);
        // };

        // const closeModal = () => {
        //     this.setState({ modal: false })
        // };

        const onChange = e => {
            this.setState({ whichPlan: plans.filter(obj => {
                return obj.name === e.target.value;
            })[0] });
   
        };

        return (
            <div className="invest">

                <div className="invest-form">
                    <div className="modal-head">
                        <h3>Choose a plan</h3>
                        {/* <p style={{ cursor: 'pointer' }}>&#10006;</p> */}
                    </div>
                    <br />



                    <br /> <br />
                    <form noValidate onSubmit={this.onSubmit}>
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
                        <p>${0}</p>

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
                        onChange={this.onChange}
                        value={this.state.amount}
                        max={this.state.whichPlan.min}
                        min={this.state.whichPlan.max}
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
