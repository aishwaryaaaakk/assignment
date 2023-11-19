import { useEffect, useState } from "react";
import './Laptops_Computers.css';

function Laptops_computers(){
    const[products, setProducts]= useState([])

    async function DisplayLaptops(){
        try {
            let res = await fetch(`http://localhost:3000/products?category=laptops`)
        let data = await res.json()
        setProducts(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        DisplayLaptops();
    },[]);

    return(
        <>
        <div className="main">
        <div className="box">
            {products.map((product,i)=>{
                return(
                    <div className='card'  key={i}>
                        <h1 className='title'>{product.title}</h1>
                        <img src={product.thumbnail}/>
                        <p className='price'>{product.price}</p>
                        <button>Add To Cart</button>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default Laptops_computers;