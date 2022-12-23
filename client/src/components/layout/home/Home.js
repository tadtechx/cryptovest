import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import './home.css';


import homevid from "./assets/homevid.mp4";
import alam from "./assets/alam.jpg";
import kingery from "./assets/kingery.jpg";

import gold from "./assets/gold.jpeg";
import realestate from "./assets/realestate.jpeg";
import loan from "./assets/loan.jpeg";


function Home() {


    const plans = [
        { id: 1, name: "Starter", refbonus: 7, duration: 12, roi: 144, min: "50", max: "499" },
        { id: 1, name: "Bronze", refbonus: 7, duration: 25, roi: 350, min: "500", max: "4,999" },
        { id: 1, name: "Silver", refbonus: 7, duration: 43, roi: 731, min: "5,000", max: "19,999" },
        { id: 1, name: "Diamond", refbonus: 7, duration: 60, roi: 1200, min: "20,000", max: "49,999" },
        { id: 2, name: "Gold", refbonus: 7, duration: 60, roi: 1380, min: "50,000", max: "90,000" },
        { id: 2, name: "Promo", refbonus: 50, duration: 7, roi: 315, min: "11,000", max: "1,000,000" },

    ]



    return (
        <div className="home">

            <div className="banner">
                <h2>Invest for Future in a Stable Platform</h2>
                <br />
                <h3>Rely on us for a better future</h3>
                <br /> <br />
                <p>CRYPTO<span className='vest'>VEST</span> is a professional, and reliable company that provides you with the most necessary features that will make your experience better. Not only we guarantee the fastest and the most exciting returns on your investments, but we also guarantee the security of your investment.</p>


                <button><Link style={{color: 'unset', textDecoration: "none"}} to="/addfunds">START EARNING</Link></button>
            </div>

            <video controls autoPlay loop>
                <source src={homevid} type='video/mp4'></source>
            </video>

            {/* <iframe src="" frameborder="0"></iframe> */}

            <div className="about-us">
                <h2>About <span className='vest'>Us</span></h2> <br />
                <p><b>Crypto<span className='vest'>vest</span></b> is a group of Bitcoin miners, traders, analysts and brokers with valuable experience in the sphere of forex and crypto
                    dedicated their time to research development. Anyone all over the world can become an investor. We provide investment vehicles to
                    investors of all sizes interested in being part of the revolutionary forex, binary option, crypto and bitcoin mining world.
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
                <p>Crypto<span className='vest'>vest</span> is one of the most reliable diversified financial investment service provider in the world. Our fundamental mission is to help customers and clients achieve their financial objectives. With offices locate in the United States, Australia,Canada and headquartered in UK, Crypto<span className='vest'>vest</span> have staffs with over 30 years’ experience in combining financial development and trades. We are committed to pushing the boundaries of what constitutes the highest standards in trades and asset management.

                </p>
                <br /> <br />
                <h3>Safety & Fraud Protection</h3> <br />
                <p>With over $5.3 Trillion traded daily in the market, we are dedicated to giving our clients their own share of the profit daily. As a leading global market maker, Crypto<span className='vest'>vest</span> has one of the World’s Largest Independent traders and fund managers with clients from different parts of the World. Today, as a successful trade investment and asset management company, we are trusted by thousands of clients. Our sterling reputation, dedication to meeting our clients’ needs and innovative approach to business development are some driving forces behind our success.

                </p>
                <br />

                <button>View Document</button>
            </div> <br /> <br /> <br />


            <div className="about-us">
                <h2>Our <span className='vest'>Services</span></h2> <br />
                <p>List of solid services we provide for our customers
                </p>
                <br /> <br /> <br />

                <div className='service'>
                    <h3>Real Estate Investment</h3>
                    <div>
                        <img src={realestate} />
                        <p>Real estate investment involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development. Real estate is an asset form with limited liquidity relative to other investments (such as stocks or bonds that openly trade on financial markets). It is also capital intensive (although capital may be gained through mortgage leverage) and is highly cash flow dependent.Real estate investment involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development. Real estate is an asset form with limited liquidity relative to other investments (such as stocks or bonds that openly trade on financial markets). It is also capital intensive (although capital may be gained through mortgage leverage) and is highly cash flow dependent.
                        </p> <br />
                    </div>
                </div>


                <br /> <br /> <br /> <br />

                <div className='service'>
                    <h3>Gold Investment</h3>
                    <div>
                        <img src={gold} />
                        <p>Golds are Commonly seen as a great store of wealth, this precious metal is also known as a reliable safe-haven asset. With a rich history amongst almost all global cultures, gold remains a highly popular investment. Although it has multiple uses, its primary function is typically to hedge against inflation in an often volatile futures market, as well as to diversify existing Precious Metals Investment Retirement Accounts. Gold has been one of the most valuable precious metals throughout human history, used by elites as a symbol of wealth for centuries due to its rarity and its ability to hold its worth for a long time. Historically, it has been the most common way to pass on one’s wealth as an inheritance from one generation to the next. Gold is considered a worthy investment, with coins and bars available for purchase in various sizes, ranging from one gram to a whopping 400 ounces.
</p> <br />
                    </div>
                </div>


                <br /> <br /> <br /> <br />

                <div className='service'>
                    <h3>Cryptovest Trade Loans</h3>
                    <div>
                        <img src={loan} />
                        <p>To get a loan doesn’t have to be intimidating, with the right lender it can be a simple process. You only need a lender committed to taking the mystery out of the mortgage loan process! , we understand! Our investors want simple facts, honest answers and competitive products. DGS automatically offers loan services to investors with over $20,000 investment either in our normal financial Service packages or the company plans. Investors over $50,000 are entitled to loans of $200,000-1millon dollars yearly with 5% paid monthly, or the investor could wish to compound the interest till the time limit, provided all required information and identity of the investor are duly confirmed by Official company Administrator/management! Every investor above $50,000 is provided with a personal account manager and the investor has a direct communication with the manager in order to see that our loan offers are secured.
                            </p> <br />
                    </div>
                </div>



            </div> <br /> <br /> <br />

            <div className="plans">
                <h2>Available <span className='vest'>Plans</span></h2>
                <p>To make a solid investment, you have to know where you are investing. Find a plan which is best for you.</p>
                <div className="plan-cards">


                    {plans.map(eachPlan => {
                        return (
                            <div className="plan-card">
                                <h3>{eachPlan.name} Plan</h3>
                                <p>{eachPlan.refbonus}% Referral Bonus</p> <hr></hr>
                                <p>{eachPlan.duration} Days</p> <hr></hr>
                                <p>{eachPlan.roi}% Return on Investment</p>  <hr></hr> <br />
                                <h3>${eachPlan.min} - ${eachPlan.max}</h3> <br />
                                <button><Link style={{color: 'unset', textDecoration: "none"}} to="/invest">INVEST NOW</Link></button>
                            </div>
                        )
                    })}
                </div>
            </div>

            <br /> <br /> <br />

            <div className="plans">
                <h2>What Users Say <span className='vest'> About Us</span></h2>
                <br /> <br />
                <p>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>
                <br /> <br />
                <div className="testimony-cards">

                    <div className='testimony-card'>
                        <p>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>
                        <br />
                        <hr></hr>
                        <img src={alam} />
                        <div>
                            <h4>Sundax Ezma</h4>
                            <p>User from USA</p>
                        </div>
                    </div>
                    <div className='testimony-card'>
                        <p>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>
                        <br />
                        <hr></hr>
                        <img src={alam} />
                        <div>
                            <h4>Sundax Ezma</h4>
                            <p>User from USA</p>
                        </div>
                    </div>
                    <div className='testimony-card'>
                        <p>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>
                        <br />
                        <hr></hr>
                        <img src={alam} />
                        <div>
                            <h4>Sundax Ezma</h4>
                            <p>User from USA</p>
                        </div>
                    </div>

                </div> <br /> <br /> <br /> <br />
            </div>
            <div className="plans">
                <h2>Our Expert <span className='vest'> Team Members</span></h2>
                <p>We have a great team including developers, designers, and Traders. The Team always working hard to give you the maximum profit.</p>
                <br /> <br />
                <div className="team-cards">
                    <div className='member'>
                        <img src={alam} /> <br />
                        <div>
                            <h3>Rocco Pietrocola</h3>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div className='member'>
                        <img src={kingery} /> <br />
                        <div>
                            <h3>Charlotte Jones</h3>
                            <p>CTO</p>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /> <br /> <br /> <br />

            <div className="services">

            </div>
        </div>
    );
}

export default Home;
