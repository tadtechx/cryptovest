

import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


import style from "./transfer.css";

axios.defaults.baseURL = "http://127.0.0.1:5000";
// const findUser = (arg) => {
//     axios.get("api/users/finduser", {params: {email: arg}})
//       .then(response => console.log(response.data))
//     //   .then((response) => {
//     //   this.setState({ theUser: response.data.email});
//     //   });

//   };

class Transfer extends Component {

    constructor() {
        super();
        this.state = {
        modes: 0,
        email: "",
        theUser: "t",
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

      

    onSubmit = e => {
        e.preventDefault();
        



    const findUser = (arg) => {
        axios.get("api/users/finduser", {params: {email: arg}})
        //   .then(response => console.log(response.data))
          .then((response) => {
          this.setState({ theUser: response.data.email});
          });
    
      };

        findUser(this.state.email);

        if (this.state.email === this.state.theUser)
        {this.setState({ modes: 1});} 
        // else {
        //     this.setState({ modes: 0});
        // }
    }



    render() {

        const transfer = (a) => {
        this.setState({modes: a})
        }

     

        return (
            <div className="transfer-page">

                <h1>Send money to a user</h1>
                {/* <h1>{this.state.theUser}</h1> */}

                <br /><br /><br />

                <form
                // style={{display: this.state.modes === 0? "block":"none"}}
                noValidate onSubmit={this.onSubmit}
                
                >
                    <input
                    type="email" 
                    placeholder="Find User by Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    id="email"
                    ></input>
                    <button className="srch"
                    //  onClick={()=>{transfer(1)}}
                    >Search</button>
                </form>


                <div>
                    {/* <p className="baq" onClick={()=>{transfer(0)}}>&larr; Back</p> */}
                    <br/> <br/>
                    <h4>
                    {this.state.email === this.state.theUser?
                    `User found: ${this.state.theUser}`:"User not found"
                }
                    </h4>
                    

                    <br /> <br /> <br />

                    <div style={{display: this.state.email === this.state.theUser? "block":"none"}}>
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
