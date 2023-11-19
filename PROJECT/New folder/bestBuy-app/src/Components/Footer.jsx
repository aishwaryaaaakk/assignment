import {Link} from 'react-router-dom'
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GoQuestion } from "react-icons/go";
import { TbDeviceMobileHeart } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";
import { ImPinterest2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import './Footer.css'
function Footer(){
    return(
    <>
    <div className='main'>
        <div className='top'>
            <div>
                <div className='icon'>
                <GoQuestion />
                </div>
                <button>Visit Our Support Center</button>
            </div>
            <div>
                <div className='icon'>
                <BsBoxSeam/>
                </div>
                <button>Check Your Order Status</button>
            </div>
            <div>
                <div className='icon'>
                <LiaShippingFastSolid/>
                </div>
                <button>Shipping, Delivery & Store Pickup</button>
            </div>
            <div>
                <div className='icon'>
                <FaExchangeAlt />
                </div>
                <button>Returns And Exchanges</button>
            </div>
            <div>
                <div className='icon'>
                <PiCurrencyCircleDollar />
                </div>
                <button>Price Match Guarantee</button>
            </div>
        </div>
        <hr style={{width:'80%', margin:'auto'}}/>
        <div className='bottom'>
            <div className='bot-left'>
                <div className='child-div'>
                <div className='links'>
                    <p style={{color:'black', fontSize:'20px'}}>Orders & Purchases</p>
                    <button>Check Order Status</button>
                    <br/>
                    <button>Shipping, Delivery & Pickup</button>
                    <br/>
                    <button>Returns & Exchanges</button>
                    <br/>
                    <button>Price Match Guarantee</button>
                    <br/>
                    <button>Product Recalls</button>
                    <br/>
                    <button>Trade-In Program</button>
                    <br/>
                    <button><Link to='/giftcards'>Gift Cards</Link></button>
                </div>
                <div>
                    <p style={{color:'black', fontSize:'20px'}}>Supports & Services</p>
                    <button>Visit our Support Center</button>
                    <br/>
                    <button>Shop with an Expert</button>
                    <br/>
                    <button>Schedule a Service</button>
                    <br/>
                    <button>Manage an Appointment</button>
                    <br/>
                    <button>Protection & Support Plans</button>
                    <br/>
                    <button>Haul Away & Recycling</button>
                    <br/>
                    <button>Contact Us</button>
                </div>
                <div>
                    <p style={{color:'black', fontSize:'20px'}}>Partnerships</p>
                    <button>Affiliate Program</button>
                    <br/>
                    <button>Advertise with Us</button>
                    <br/>
                    <button>Developers</button>
                    <br/>
                    <button>Best Buy Health</button>
                    <br/>
                    <button>Best Buy Education</button>
                    <br/>
                    <button>Best Buy Business</button>
                </div>
                
                </div>
                <div className='bot-child-div'>
                <div>
                    <p style={{color:'black', fontSize:'20px'}}>Payment Options</p>
                    <butoon>My Best Buy® Credit Card</butoon>
                    <br/>
                    <button>Pay Your Bill at Citibank</button>
                    <br/>
                    <button>Lease to Own</button>
                </div>
                <div>
                    <p style={{color:'black', fontSize:'20px'}}>Rewards & Membership</p>
                    <button>My Best Buy Memberships</button>
                    <br/>
                    <button>View Points & Certificates</button>
                    <br/>
                    <button>Member Offers</button>
                </div>
                <div>
                    <p style={{color:'black', fontSize:'20px'}}>About Best Buy</p>
                    <button>Corporate Information</button>
                    <br/>
                    <button>Careers</button>
                    <br/>
                    <button>Corporate Responsibility</button>
                    <br/>
                    <button>Sustainability</button>
                </div>

                </div>
            </div>
            <div className='bot-right'>
                <div className='card'>
                    <p className='sign-in'>Sign in or Create Account</p>
                    <hr/>
                    <p className='text'>Get the latest deals and more.</p>
                    <div className='email' >
                        <input placeholder='Enter email address'/>
                        <button className='sign-in-btn'>Sign Up</button>
                    </div>
                    <hr/>
                    <div className='name' >
                    <div className='logo'>
                    <TbDeviceMobileHeart />
                    </div>
                    <div  >
                        <p style={{fontSize:'20px', color:'black'}}>Best Buy App</p>
                        <p>Learn more > </p>
                    </div>
                    </div>
                    <hr/>
                    <div className='social-media'>
                        <div className='icon'>
                        <TfiYoutube />
                        </div>
                        <div className='icon'>
                        <FaInstagram />
                        </div>
                        <div className='icon'>
                            <PiFacebookLogoBold />
                        </div>
                        <div className='icon'>
                            <ImPinterest2 />
                        </div>
                        <div className='icon'>
                            <AiFillTwitterCircle/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default Footer;