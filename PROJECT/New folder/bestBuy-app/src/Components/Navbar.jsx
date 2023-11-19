import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
function Navbar(){

   
    return(
        <>
        <div className='nav-top'>
                <div className='nav-top-left'>
                <Link to='/'><img className='Logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1iP9hWsUtFgtHTIMEb4bcKJvnLUiY0i8Fw&usqp=CAU"/></Link>
                <button> MENU</button>
                <input
                
                  style={{padding:"9px",color:"rgb(72, 72, 243)", fontSize:"20px", marginLeft:"20px", width:"50%", borderRadius:" 4px 0px 0px 4px"}}
                   placeholder="What can we help you find today?" />
                   <button>
                <SearchIcon  cursor='pointer' color="rgb(72, 72, 243)" bg="white" boxSize={12} p="12px" borderRadius="0px 4px 4px 0px"/> 
                </button>
                
                </div>
                <div className='nav-top-right'>
                <button>Aiea</button>
                <button>Cart</button>
                </div>
            
            </div>
        <div className='nav-bot'>
            <div className='nav-bot-left'>
            <button><Link to='/blackfriday'>Black Friday Deals</Link></button>
            <button>Top Deals</button>
            <button>Deal of the Day</button>
            <button>My Best Buy Memberships</button>
            <button><Link to='/creditcards'>Credit Cards</Link></button>
            <button><Link to='/giftcards'>Gift Cards</Link></button>
            
            <button>Gift Ideas</button>
            <button>More<ChevronDownIcon /></button>
            </div>

            <div className='nav-bot-right'>
            <Popover>
            <PopoverTrigger  >
            <button>Account<ChevronDownIcon /></button>
            </PopoverTrigger>
            <PopoverContent style={{width:'400px'}}>
            <PopoverArrow style={{color:'black'}} />
            <PopoverHeader style={{color:'black', fontSize:'13px'}}>My Best Buy® members get free shipping with no
            minimum purchase. Plus, exclusive offers and more.</PopoverHeader>
            <PopoverBody>
                <button style={{backgroundColor:'rgb(72, 72, 243)',
                color: 'white',
                padding:'5px',
                width:'100%'}}>Sign In</button></PopoverBody>
            <PopoverBody>
                <button style={{color:'rgb(72, 72, 243)',
                border:'1px solid rgb(72, 72, 243)',
                padding:'5px',
                width:'100%'}} >Create Account</button></PopoverBody>
            <div></div>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Account</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Purchases</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Products</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Payment Methods</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Plans and Subscriptions</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Digital Library</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Member Offers</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>My Best Buy Memberships™</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Free Home Consultation</button></PopoverBody>
            <hr/>
            <PopoverBody style={{color:'rgb(72, 72, 243)'}}><button>Account Settings</button></PopoverBody>
            <hr/>
            <PopoverCloseButton style={{color:'rgb(72, 72, 243)'}}/>
            </PopoverContent>
            </Popover>
            <button>Recently Viewed <ChevronDownIcon /></button>
            <button>Order Status <ChevronDownIcon /></button>
            <button>Saved Items<ChevronDownIcon /></button>
            </div>
            
        </div>
        </>
    )
}
export default Navbar;