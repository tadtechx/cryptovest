

import React, { Component } from "react";
import { Link } from "react-router-dom";

import style from "./transfer.css";


class Transfer extends Component {

    constructor() {
        super();
        this.state = { modes: 0 };
    }

    render() {

        const transfer = (a) => {
        this.setState({modes: a})
        }

        return (
            <div className="transfer-page">

                <h1>Send money to a user</h1>

                <br /><br /><br />

                <div style={{display: this.state.modes === 0? "block":"none"}}>
                    <input type="email" placeholder="Find User by Email"></input>
                    <button className="srch" onClick={()=>{transfer(1)}}>Search</button>
                </div>


                <div style={{display: this.state.modes === 1? "block":"none"}}>
                    <p className="baq" onClick={()=>{transfer(0)}}>&larr; Back</p>
                    <br/> <br/>
                    <h4>User found:</h4>
                    <p>greatone@email.com</p>

                    <br /> <br /> <br />

                    <div>
                        <input type="number" placeholder="$ Amount"></input> <br /> <br /> <br />
                        <button className="transfer" onClick={()=>{transfer(2)}}>Send</button>
                    </div>
                </div>

                <div style={{display: this.state.modes === 2? "block":"none"}}>
                    <h3>Send ${200} to <i>greatone@email.com?</i></h3>
                    <br />
                    <button className="success">Confirm</button>
                    <button className="fail" onClick={()=>{transfer(0)}}>Cancel</button>
                </div>


            </div>
        );
    }
}



export default Transfer;
