
import React, { Component } from "react";
import { Link } from "react-router-dom";


// Style
// import './about.css';

function Errorpage() {
  return (
    <div className="errorpage" style={{textAlign: "center"}}>
        
        <h1>
        Error 404
        </h1> <br /> <br /> <br /> <br />
        <h4>Page not found</h4>
        <br /> <br /> <br />
        <p>Head back to the <Link to='/'>Homepage</Link></p>
    </div>
  );
}

export default Errorpage;
