
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


const methods = [
    { id: 1, name: "Bitcoin", address: "3FzJDsJDkn92C8wC1NrNXVzsuggiJoahHd" },
    { id: 2, name: "BNB", address: "3FzJDsJDkn92C8wC1NrNXVzsuggiJoahHd" },
    { id: 3, name: "Ethereum", address: "3FzJDsJDkn92C8wC1NrNXVzsuggiJoahHd" },
    { id: 4, name: "Litecoin", address: "3FzJDsJDkn92C8wC1NrNXVzsuggiJoahHd" },
    { id: 5, name: "USDT", address: "3FzJDsJDkn92C8wC1NrNXVzsuggiJoahHd" },
    
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
            theMethod: methods.filter(obj => {
                return obj.id === 3;
            })
        }};


    render() {
        console.log(this.state.theMethod[0].name);

        const payModal = (b) => {


            this.setState({ modal: true,
                theMethod: methods.filter(obj => {
                    return obj.id === b;
                })
            })
            console.log(this.state.theMethod[0].name);
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
                    <form>

                        <input type="number" placeholder='$'></input> <br /> <br /> <br />

                        <label for="proof">
                            <b>Upload proof</b>
                            
                            </label>  <br /> <br />
                        <input id="proof" type="file" placeholder='$'></input> <br /> <br />
                        <button className="fundacc">Fund Account</button> <br />
                    </form>
                    <br /><br />
                    <b><center>Charge: 0.02% + 2 USD</center></b>
                </div>
            </div>
        );
    }
}

export default Deposit;
