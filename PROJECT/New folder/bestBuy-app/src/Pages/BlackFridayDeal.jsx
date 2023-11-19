import './BlackFridayDeal.css';
import { useState ,useEffect } from "react";

function BlackFridayDeal(){
    const [product,setProduct] = useState([]);

    async function  DisplayData(){
        try {
            let res = await fetch(`http://localhost:3000/products`)
            let data = await res.json()
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        DisplayData();
    },[]);

    return(
        <>
        <div className="main">
        <div>
            <h1 style={{color:'black'}}>Black Friday is here</h1>
        </div>
        <div className='box'>
            <div>
            {product.map((products,i)=>{
                return(
                    <div className='card' key={i}>
                        <img className='image' src={products.thumbnail}/>
                        <p className='title'>{products.title}</p>
                        <p className='price'>${products.price}</p>
                        <button>Add to Cart</button>
                        
                        
                        
                        

                    </div>
                );
            })}
            </div>
        </div>
        </div>
        </>
    )
}
export default BlackFridayDeal;