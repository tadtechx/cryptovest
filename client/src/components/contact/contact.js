
import React, { Component } from "react";


// Style
import './contact.css';

function Contact() {
  return (
    <div className="about">
        <h2>Contact Us</h2> <br />
        <h1 className="vest">
        We love to talk about how we can help you.
        </h1>
        
        <div className="sign">

  
   <form>
        <label>Your Name</label> <br/> <br />
        <input type="text" placeholder='Scott Marshall'/>
        <br /> <br /> <br />
        <label>Your Email Address</label> <br/> <br />
        <input type="email" placeholder='scottmarshall@email.com'/>
        <br /> <br /> <br />
        <label>Subject</label> <br/> <br />
        <input type="text" placeholder='Investment Plans'/>
        <br /> <br /> <br />
        <label>Your Phone Number</label> <br/> <br />
        <input type="number" placeholder='+1-234-5678-4567'/>
        <br /> <br /> <br />
        <label>How can we help you?</label> <br/> <br />
        <textarea placeholder="Hi, I'd like to....." rows="15" cols="40"></textarea>
        <br /> <br /> <br />
       
       <br /> <br />

      
       <button type="submit">Submit</button>
  </form>

   </div>


    </div>
  );
}

export default Contact;
