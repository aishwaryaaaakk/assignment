
import { Link } from 'react-router-dom';
import './main.css';
function MainBody(){
    return(
        <>
        <div className="main-body">
            <p className='heading'>Black Friday Deals <br/><span style={{color:"yellow"}}>right now.</span></p>
            <p>Also, My Best Buy Plus™ and My Best Buy Total™ members get more Black Friday Deals.</p>
            <h6>Shop deals by category</h6>
            <div className="container">
                <div >
                    
                    <div className="image-wrapper">
                       <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/mybbymembership_techblack_topdeals-99c13475-5626-4bb0-ba30-05d62792caa0.png;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Exclusive Member Deals</p> 
                    
                    
                
                </div>
                <div>
                    <div className="image-wrapper">
                    <Link to='/laptopscomputers'><img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-img-icons-laptop-7d08a055-6252-465a-9535-2f1182410434.jpg;maxHeight=370;maxWidth=370"/></Link>
                    </div>
                    <br/>
                    <Link to='/laptopscomputers'><p style={{color:'yellow'}}>Laptops & Computers</p></Link>
                </div>
                <div>
                    <div className="image-wrapper">
                    <Link to='/tvsprojectors'><img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514052_sd.jpg;maxHeight=370;maxWidth=370"/></Link>
                    </div>
                    <br/>
                    <Link to='/tvsprojectors'><p style={{color:'yellow'}}>TVs & Projectors</p></Link>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562643_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Video Games, Consoles & VR</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6546/6546220_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Major Appliances</p> 
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534606_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Apple</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6544/6544832_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Cell Phones & Accessories</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_rd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Headphones</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6541/6541529cv2d.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>PC Gaming</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464584_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Tablets & E-Readers</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6554/6554403_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Sound Bars, Bluetooth Speakers & Home Audio</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486185_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Cameras, Camcorders & Drones</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559662_rd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Wearable Technology</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5850/5850410_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Small Appliances, Floor Care & Home Air Quality</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441424_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Smart Home & Networking</p>   
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6540/6540778_sd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Printers & Computer Accessories</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522477_rd.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Electric Transportation</p>
                </div>
                <div>
                    <div className="image-wrapper">
                        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470216cv11d.jpg;maxHeight=370;maxWidth=370"/>
                    </div>
                    <p>Collectibles & Toys</p>
                </div>

            </div>
        </div>
        
        </>
    );
}
export default MainBody;