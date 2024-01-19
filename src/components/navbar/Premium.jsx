import React from 'react';
import { Link } from 'react-router-dom';
import './Premium.css';
import QuoraLogo from '../../images/Quora.png'

const Premium = () => {
    return (
        <div className='premium-box'>
            <div className='premium-page-container'>
                <div className='premium-header'>
                    <img src={QuoraLogo} alt='' />
                    <h1>Quora Premium</h1>
                </div>
                <div className='premium-help'>
                    Help support Quora and get VIP treatment and exclusive access.
                </div>
                <div className='premium-plan'>
                    <button className='month-plan' >$5.99/Month</button>
                    <button className='year-plan' >$49.99/Year<span>Save 30%</span></button>
                </div>
                <div style={{ color: "white", fontSize: "14px", marginLeft: "10px" }}>Subscriptions automatically renew</div>
            </div>
            <div className="join-premium">
                <h1>Join Quora Premium Today</h1>
                <div className='cards-container'>
                    <div className='card'>
                        <img src='https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-ad-free.png' alt='' />
                        <h3>Ad-free Browsing</h3>
                        <div>Enjoy Quoraing without interruptions from ads</div>
                    </div>
                    <div className='card'>
                        <img src='https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-avatars.png' alt='' />
                        <h3>Exclusive Avatar Gear</h3>
                        <div>Outfit your avatar with the best gear and accessories</div>
                    </div>
                    <div className='card'>
                        <img src='https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-lounge.png' alt='' />
                        <h3>Members Lounge</h3>
                        <div>Discover all the illuminati secrets in r/lounge</div>
                    </div>
                    <div className='card'>
                        <img src='https://www.redditstatic.com/desktop2x/img/gold/premium-marketing/benefits-icons/premium-app-icons.png' alt='' />
                        <h3>Custom App Icons*</h3>
                        <div>Change your app icon to something more your style</div>
                    </div>
                </div>
                <div className='premium-plan'>
                    <button className='month-plan-join' >$5.99/Month</button>
                    <button className='year-plan' >$49.99/Year<span>Save 30%</span></button>
                </div>
                <p style={{ fontSize: "13px", paddingTop: "10px" }}>Subscriptions automatically renew</p>
                <p style={{ fontSize: "13px", paddingTop: "10px" }}>* Custom app icons are only available through a paid Quora Premium Subscription.</p>
                <br />
                <br />
                <h3>Visit the Quora Premium FAQs</h3>
                <br />
                <br />
            </div>
            <footer className="footer-premium">
                <div className="footer-container">
                    <div className="footer-card">
                        <div>About</div>
                        <div>Careers</div>
                        <div>Press</div>
                    </div>
                    <div className="footer-card" style={{ borderRight: "1px solid #ddd" }}>
                        <div>Advertise</div>
                        <div>Blog</div>
                        <div>Help</div>
                    </div>
                    <div className="footer-card" style={{ borderRight: "1px solid #ddd", lineHeight: '50px' }}>
                        <div>Quora Premium</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="footer-card">
                        <div>Facebook</div>
                        <div>Twitter</div>
                        <div>Instagram</div>
                    </div>
                </div>
                <ul>
                    <li><Link>Content Policy</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>User Agreement</Link></li>
                    <li><Link>Mod Policy</Link></li>
                    <li>Quora, Inc. @ 2023. All rights reserved</li>
                </ul>
            </footer>
        </div>
    )
}

export default Premium