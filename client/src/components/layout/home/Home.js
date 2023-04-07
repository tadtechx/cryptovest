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
import mastercard from "./assets/mcards.jpg";

import headset from "./assets/headset.png";
import copy from "./assets/copy.png";
import lock from "./assets/lock.png";
import referral from "./assets/referral.png";
import secured from "./assets/secured.png";
import server from "./assets/server.png";
import shield from "./assets/shield.png";
import userlock from "./assets/userlock.png";
import withdraw from "./assets/withdraw.png";

import test1 from "./assets/test1.jpg";
import test2 from "./assets/test2.jpg";
import test3 from "./assets/test3.jpg";
import test4 from "./assets/test4.jpg";

import docc from "./assets/license.JPG";


function Home() {


    const plans = [
        { id: 1, name: "Starter Plan", refbonus: 7, duration: 12, roi: 144, min: "50", max: "499" },
        { id: 1, name: "Bronze Plan", refbonus: 7, duration: 25, roi: 350, min: "500", max: "4,999" },
        { id: 1, name: "Silver Plan", refbonus: 7, duration: 43, roi: 731, min: "5,000", max: "19,999" },
        { id: 1, name: "Diamond Plan", refbonus: 7, duration: 60, roi: 1200, min: "20,000", max: "49,999" },
        { id: 2, name: "Gold Plan", refbonus: 7, duration: 60, roi: 1380, min: "50,000", max: "90,000" },
        { id: 2, name: "Promo Package", refbonus: 50, duration: 7, roi: 315, min: "11,000", max: "1,000,000" },

    ]



//     const testr = document.getElementById("testimony-cards");
// const scroll = () => {
// if (testr.scrollWidth - testr.scrollLeft <= testr.clientWidth * 1.25) {
//     testr.scroll(0, 0);

// } else {
//     testr.scrollBy(240, 0);
// }

// }

    // setInterval(scroll,3000);


    return (
        <div className="home">
            <div className="banner">
                <h2>Invest for the Future in a Stable Platform</h2>
                <br />
                <h3>Rely on us for a better future</h3>
                <br /> <br />
                <p>CRYPTO<span className='vest'>VEST</span> is a professional, and reliable company that provides you with the most necessary features that will make your experience better. Not only we guarantee the fastest and the most exciting returns on your investments, but we also guarantee the security of your investment.</p>                
                <button><Link style={{ color: 'unset', textDecoration: "none" }} to="/addfunds">START EARNING</Link></button>
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

                <a href={docc}>
                    <button>View Document</button></a>
            </div> <br /> <br /> <br />


            <div className="plans">
                <h2>Available <span className='vest'>Plans</span></h2>
                <p>To make a solid investment, you have to know where you are investing. Find a plan which is best for you.</p>
                <div className="plan-cards">


                    {plans.map(eachPlan => {
                        return (
                            <div className="plan-card">
                                <h3>{eachPlan.name}</h3>
                                <p>{eachPlan.refbonus}% Referral Bonus</p> <hr></hr>
                                <p>{eachPlan.duration} Days</p> <hr></hr>
                                <p>{eachPlan.roi}% Return on Investment</p>  <hr></hr> <br />
                                <h3>${eachPlan.min} - ${eachPlan.max}</h3> <br />
                                <button><Link style={{ color: 'unset', textDecoration: "none" }} to="/invest">INVEST NOW</Link></button>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className="about-us">
                <h2>Our <span className='vest'>Services</span></h2> <br />
                <p>List of solid services we provide for our customers
                </p>
                <br /> <br /> <br />

                <div className='service'>
                    <img src={realestate} />
                    <div>
                        <h3>Real Estate Investment</h3>
                        <p>Real estate investment involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development. Real estate is an asset form with limited liquidity relative to other investments (such as stocks or bonds that openly trade on financial markets). It is also capital intensive (although capital may be gained through mortgage leverage) and is highly cash flow dependent.Real estate investment involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development. Real estate is an asset form with limited liquidity relative to other investments (such as stocks or bonds that openly trade on financial markets). It is also capital intensive (although capital may be gained through mortgage leverage) and is highly cash flow dependent.
                        </p> <br />
                    </div>
                </div>


                <br /> <br /> <br /> <br />

                <div className='service'>
                   <img src={gold} /> 
                    <div>
                        <h3>Gold Investment</h3>
                        <p>Golds are Commonly seen as a great store of wealth, this precious metal is also known as a reliable safe-haven asset. With a rich history amongst almost all global cultures, gold remains a highly popular investment. Although it has multiple uses, its primary function is typically to hedge against inflation in an often volatile futures market, as well as to diversify existing Precious Metals Investment Retirement Accounts. Gold has been one of the most valuable precious metals throughout human history, used by elites as a symbol of wealth for centuries due to its rarity and its ability to hold its worth for a long time. Historically, it has been the most common way to pass on one’s wealth as an inheritance from one generation to the next. Gold is considered a worthy investment, with coins and bars available for purchase in various sizes, ranging from one gram to a whopping 400 ounces.
                        </p> <br />
                    </div>
                </div>


                <br /> <br /> <br /> <br />

                <div className='service'>
                    <img src={loan} />
                    <div>
                        <h3>Cryptovest Trade Loans</h3>
                        <p>To get a loan doesn’t have to be intimidating, with the right lender it can be a simple process. You only need a lender committed to taking the mystery out of the mortgage loan process! , we understand! Our investors want simple facts, honest answers and competitive products. DGS automatically offers loan services to investors with over $20,000 investment either in our normal financial Service packages or the company plans. Investors over $50,000 are entitled to loans of $200,000-1millon dollars yearly with 5% paid monthly, or the investor could wish to compound the interest till the time limit, provided all required information and identity of the investor are duly confirmed by Official company Administrator/management! Every investor above $50,000 is provided with a personal account manager and the investor has a direct communication with the manager in order to see that our loan offers are secured.
                        </p> <br />
                    </div>
                </div>

                <br /> <br /> <br /> <br />

                <div className='service'>
                    <img src={mastercard} />
                    <div>
                        <h3>Cryptovest Mastercard</h3>
                        <p>The partnership aims to fill a gap in the traditional financial system that has left many without access to essential banking products. According to a 2017 survey by the FDIC, 25 percent of U.S. households are unbanked or underbanked, while global numbers have reached a staggering 1.7 billion, according to data released by the World Bank. Through BlockCard, Blockvult investors can have a virtual card issued to them while a physical card is mailed to them. The card has a minimum of $1000 balance needed. It can be used at over 45 million merchants and ATMs – anywhere in the world where major credit cards are accepted.
                            </p> <br />
                    </div>
                </div>



            </div> <br /> <br /> <br />


            <div className="why-choose">

            <h1>Why Choose <span className='vest'>Cryptovest</span></h1>
                <p>Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service.
                </p>
                <div className='choose-cards'>
                    <div className="choose-card">
                        <h2><img src={copy}></img>Legal Company</h2>
                        <p>Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={lock}></img>High Reliability</h2>
                        <p>We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={userlock}></img>Anonymity</h2>
                        <p>Anonymity and using cryptocurrency as a payment instrument. In the era of electronic money – this is one of the most convenient ways of cooperation.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={withdraw}></img>Quick Withdrawal</h2>
                        <p>Our all retreats are treated spontaneously once requested. There are high maximum limits. The minimum withdrawal amount is only $10 .</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={referral}></img>Referral Program</h2>
                        <p>We are offering a certain level of referral income through our referral program. you can increase your income by simply refer a few people.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={headset}></img>24/7 Support</h2>
                        <p>We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulty.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={server}></img>Dedicated Server</h2>
                        <p>We are using a dedicated server for the website which allows us exclusive use of the resources of the entire server.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={secured}></img>SSL Secured</h2>
                        <p>Comodo Essential-SSL Security encryption confirms that the presented content is genuine and legitimate.</p>
                    </div>
                    <div className="choose-card">
                        <h2><img src={shield}></img>DDOS Protection</h2>
                        <p>We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider.</p>
                    </div>

                </div>

            </div>


            

            <br /> <br /> <br />

            <div className="plans">
                <h2>What Users Say <span className='vest'> About Us</span></h2>
                <br /> <br />
                <p>We are doing really good at this market and here are the words we loved to get from a few of our users.</p>
                <br /> <br />
                <div className="testimony-cards" id="testimony-cards">

                    <div className='testimony-card'>
                        <p>Lord, you are blessed. Thank you for this opportunity and I promise to appreciate it perfectly. I received my money in my wallet. Thank you, cryptovest team.
                        </p>
                        <br />
                        <hr></hr>
                        <img src={test4} />
                        <div>
                            <h4>Philips Hale</h4>
                            <p>User from Washington DC</p>
                        </div>
                    </div>
                    <div className='testimony-card'>
                        <p>
                            This platform is quite differentfrom others, they always make sure that our withdrawal reaches our wallet in good time. Congratulations to me.
                        </p>
                        <br />
                        <hr></hr>
                        <img src={test2} />
                        <div>
                            <h4>Lisa Miles</h4>
                            <p>User from Bristol City, United Kingdom</p>
                        </div>
                    </div>
                    <div className='testimony-card'>
                        <p>
                            Have invested with this platform and gotten my money in my account. This is legit and safe. Great doing business with them.
                        </p>
                        <br />
                        <hr></hr>
                        <img src={test1} />
                        <div>
                            <h4>Christopher Mandros</h4>
                            <p>User from Texas</p>
                        </div>
                    </div>
                    <div className='testimony-card'>
                        <p>
                            Legit... and legit. Although the payment was processed manually, I have received my first payment within a very short time. I think nice for invest at this site.
                        </p>
                        <br />
                        <hr></hr>
                        <img src={test3} />
                        <div>
                            <h4>Munna Kumar</h4>
                            <p>User from India</p>
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
