import React, { Component }  from 'react';

// Style
import './home.css';


import homevid from "./assets/homevid.mp4";

function Home() {


const plans = [
    {id: 1, name: "Diamond", refbonus: 7, duration: 60, roi: 1200, min: "20,000", max: "49,999"},
    {id: 2, name: "Gold", refbonus: 7, duration: 60, roi: 1380, min: "50,000", max: "90,000"},
    {id: 2, name: "Promo", refbonus: 50, duration: 7, roi: 315, min: "11,000", max: "1,000,000"},

]



    return (
        <div className="home">

            <div className="banner">
                <h2>Invest for Future in a Stable Platform</h2>
                <br />
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                <br /> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsum aliquid illo vero, sint at quos quo id nulla.</p>
                
                
                <button>START EARNING</button>
            </div>

            <video controls autoPlay>
                <source src={homevid} type='video/mp4'></source>
            </video>

            {/* <iframe src="" frameborder="0"></iframe> */}

            <div className="about-us">
                <h2>About Us</h2> <br />
                <p><b>CRYPTO<span className='vest'>VEST</span></b> is a group of Bitcoin miners, traders, analysts and brokers with valuable experience in the sphere of forex and crypto
                    dedicated their time to research development. Anyone all over the world can become an investor. We provide investment vehicles to
                    investors of all sizes interested in being part of the revolutionary forex, binary option, cryto and bitcoin mining world.
                </p>
                <br />
                <p> We have 
                    studied the bitcoin marketplace very closely, as well as other digital currencies, and we have built bots with AI (Artificial Intelligence). We
                    have created a database with all the trading volume available on digital currencies and which is updated daily, allowing the software to spot different
                    patterns in price movement. It uses different strategies, and they are capable of adapting to any online trading platform.
                    </p> <br />
                    <p>Join millions who have already discovered smarter strategies for investing. Join experience traders and earn greatly.</p>
                <br /> <br />
                <h3>Legal Information</h3> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus suscipit quasi maiores?</p>
                <br /> <br />
                <h3>Safety Protection</h3> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus suscipit quasi maiores?</p>
                <br /> <br />
                <h3>Our Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quaerat laborum adipisci nesciunt, iusto perspiciatis possimus porro.</p>

                <br /> <br /> <br />
                <button>View Document</button>
            </div> <br /> <br /> <br />

            <div className="plans">
                <h2>Available Plans</h2>
                <div className="plan-cards">
                    

                    {plans.map(eachPlan => {
                        return (
                            <div className="plan-card">
                            <h3>{eachPlan.name} Plan</h3>
                            <p>{eachPlan.refbonus}% Referral Bonus</p>
                            <p>{eachPlan.duration} Days</p>
                            <p>{eachPlan.roi}% Return on Investment</p> <br />
                            <h3>${eachPlan.min} - ${eachPlan.max}</h3> <br />
                            <button>INVEST NOW</button>
                        </div> 
                        )
                    })}
                </div>
            </div>

            <div className="services">
                
            </div>
        </div>
    );
}

export default Home;
