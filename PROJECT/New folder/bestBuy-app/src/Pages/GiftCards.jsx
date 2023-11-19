import {Link} from 'react-router-dom';
import './GiftCards.css';

function GiftCards(){
    return(
        <>
        <div className='main'>

        <div className='giftcard-top'>
            <div>
            <Link to='/'><p style={{color:'blue', fontSize:'15px', padding:'10px'}}>Best Buy</p></Link>
            <p style={{fontSize:'20px', marginTop:'20px'}}>Best Buy Gift Cards</p>
            </div>
        </div>
        <div className='gift-card'>
            <div className='gift-card-left'>
            <p><span style={{color:'yellow'}}>Give the perfect gift card</span>.</p>
            <h3>No Expiration Date or Fees.</h3>
            <vr/>
            </div>
            <div className='gift-card-right'>
                <button>Check Card Balance</button>
                <p style={{color:'yellow'}}>Gift card Terms And Conditions</p>

            </div>

        </div>
        <div className='gift-card-bot'>
            <div>
            <p>What type of Gift Card would you like?</p>
            <hr />
            <div className='gift-card-option'>
                <div>
                    <img src='https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-87023-pol-gc-101023-039a7588-925a-4751-a9f9-bfd8dcd99d67.jpg;maxHeight=262;maxWidth=386'/>
                    <button>Gift Cards</button>
                    <p>Mails, physical Cards</p>
                </div>
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0bKuRmF02cIBa9Ay41LjvYRCEU-WKELBcQ&usqp=CAU'/>
                    <button>E-Gift Cards*</button>
                    <p>Emailed, digital cards. Perfect for when you are short on time.</p>
                </div>
                <div>
                    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/nav-apple-sol99525-6e874950-8827-4ce1-9273-43857b17ef49.png;maxHeight=262;maxWidth=386"/>
                    <button>Speciality Gift Cards</button>
                    <p>Shop gaming, dining, movie, music prepaid cell cards and more.</p>
                </div>
                <div>
                    <img src='https://cms.giftpack.ai/uploads/image_2_2_min_bab9d49c90.png'/>
                    <button>Corporate Gift Cards</button>
                    <p>Powerful incentives for businesses big and small.</p>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}
export default GiftCards;