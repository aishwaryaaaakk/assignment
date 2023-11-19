import './App.css'
import MainBody from './Components/MainBody.jsx';
import Navbar from './Components/Navbar.jsx';
import {  Routes, Route } from "react-router-dom";
import GiftCards from './Pages/GiftCards.jsx';
import CreditCards from './Pages/CreditCards.jsx';
import BlackFridayDeal from './Pages/BlackFridayDeal.jsx';
import Footer from './Components/Footer.jsx';
import Laptops_computers from './Pages/Laptops_Computers.jsx';
import TVs_Projectors from './Pages/TVs_Projectors.jsx';

function App() {

    
  return(
  <div className="top-nav">
    
    <Navbar />
    <Routes>
      <Route path='/' element={<MainBody/>} />
      <Route path='/blackfriday' element={<BlackFridayDeal/>} />
      <Route path='/creditcards' element={<CreditCards/>} />
      <Route path='/giftcards' element={<GiftCards/>} />
      <Route path='/laptopscomputers' element={<Laptops_computers/>} />
      <Route path='/tvsprojectors' element={<TVs_Projectors/>} />
    </Routes>
    <Footer/>
    
      
  </div>
        
  );
  
}

export default App;