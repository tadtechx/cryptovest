
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userDeposit } from "../../actions/fundActions";
import classnames from "classnames";

// Style
import './deposit.css';

//Images
import bitcoin from './assets/bitcoin.png';
import bnb from './assets/bnb.png';
import eth from './assets/eth.png';
import lite from './assets/lite.png';
import usdt from './assets/usdt.png';


const methods = [
    { id: 1, name: "Bitcoin", address: "3FzJDsJDkn92C8wC1NrNXVzsuggiJoahHd" },
    { id: 2, name: "BNB", address: "bnb1elx3at8cs5f3gmsv0m099aezw2537grhp0wq8v" },
    { id: 3, name: "Ethereum", address: "0x62Bdc3e45BeDfeaB2BCc57a4BD6C729beC01595" },
    { id: 4, name: "Litecoin", address: "M7uxJqnxwTv6N1G9uYQcPaS4WMyod21SRJ" },
    { id: 5, name: "USDT (Trc20)", address: "TRTbPBWrzjC16EwK3Jne7DojFgC6CbXVDg" },
    
]



// console.log(theMethod[0].address);


const linkStyle = {
    textDecoration: 'none',
    color: "unset",
};


class Deposit extends Component {

    constructor() {
        super();
        this.state = { modal: false,
            modal2: false,
            theMethod: methods.filter(obj => {
                return obj.id === 3;
            }),
            email: "",
            amount: 0,
            isSuccessful: false,
            proof: "",
            network: "",
        }};

        onChange = e => {
            this.setState({ [e.target.id]: e.target.value });
          };
        
          onSubmit = e => {
            e.preventDefault();
        
            const newDeposit = {
              idnumber: Math.random()*200000,
              email: this.props.auth.user.email,
              amount: this.state.amount,
              isSuccessful: false,
            //   method: this.state.theMethod,
                proof: this.state.proof,
                network: this.state.theMethod[0].name,
            };
        
            this.props.userDeposit(newDeposit);
            this.setState({ modal: false });
            this.setState({ modal2: true });
          };


    render() {
        console.log(this.state.theMethod[0].name);

        const payModal = (b) => {


            this.setState({ modal: true,
                theMethod: methods.filter(obj => {
                    return obj.id === b;
                })
            })
    
        };

        const closeModal = () => {
            this.setState({ modal: false })
        };

        return (
            <div className="deposit">

                <div className="dashbody">
                    <div className="balance">
                        <span><img src={bitcoin}></img>
                            <h3>Bitcoin</h3></span>
                        <button onClick={() => payModal(1)}>Deposit</button>
                    </div>
                    <div className="balance">
                        <span><img src={bnb}></img>
                            <h3>BNB</h3></span>
                        <button onClick={() => payModal(2)}>Deposit</button>
                    </div>
                    <div className="balance">
                        <span><img src={eth}></img>
                            <h3>Ethereum</h3></span>
                        <button onClick={() => payModal(3)}>Deposit</button>
                    </div>
                    <div className="balance">
                        <span><img src={lite}></img>
                            <h3>Litecoin</h3></span>
                        <button onClick={() => payModal(4)}>Deposit</button>
                    </div>
                    <div className="balance">
                        <span><img src={usdt}></img>
                            <h3>USDT</h3></span>
                        <button onClick={() => payModal(5)}>Deposit</button>
                    </div>

                </div>

                
                <div className="confirm-modal"
                    style={{ transform: this.state.modal ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
                >
                    <div className="modal-head">
                        <h3>{this.state.theMethod[0].name}</h3><p onClick={closeModal} style={{cursor: 'pointer'}}>&#10006;</p>
                    </div>
                    <br />
                    <p>
                        {this.state.theMethod[0].name} Wallet Address: <br />
                        {this.state.theMethod[0].address} <button className="copyadd" onClick={() => { navigator.clipboard.writeText(this.state.theMethod[0].address) }}>Copy</button>
                    </p>
                    <br /> <br />
                    <form noValidate onSubmit={this.onSubmit}>

                        <input 
                        type="number"
                        placeholder='$'
                        id="amount"
                        onChange={this.onChange}
                        value={this.state.amount}
                        ></input> <br /> <br /> <br />

                        <input 
                        type="email"
                        placeholder='Enter email'
                        onChange={this.onChange}
                        id="email"
                        value={this.props.auth.user.email}
                        readOnly
                        style={{backgroundColor: "lightgrey", border: "1px solid black"}}
                        ></input> <br /> <br /> <br />

                        {/* <label for="proof">
                            <b>Upload proof</b>
                            
                            </label>  <br /> <br />
                            <input 
                            id="proof"
                        type="file"
                        
                        onChange={this.onChange}
                        value={this.state.proof}
                        >
                            </input> */}
                            <br /> <br />
                        <button className="fundacc">Fund Account</button> <br />
                    </form>
                    <br /><br />
                    <b><center>Charge: 0.02% + 2 USD</center></b>
                </div>
                <div className="confirm-modal modal2"
                    style={{ transform: this.state.modal2 ? 'translate(-50%) scale(1)' : 'translate(-50%) scale(0)' }}
                >
                    <div className="modal-head">
                        <h3></h3><p onClick={()=>{this.setState({ modal2: false });}} style={{cursor: 'pointer'}}>&#10006;</p>
                    </div>
                    <br/>
                    <h1>Request Sent </h1> <br/>
                    <h1>&#9989;</h1> <br/>
                    <p>Wait for approval....</p>
                </div>
            </div>
        );
    }
}

Deposit.propTypes = {
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
  )(withRouter(Deposit));
