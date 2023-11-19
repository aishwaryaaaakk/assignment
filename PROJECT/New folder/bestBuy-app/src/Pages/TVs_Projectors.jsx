import { useEffect, useState } from "react";
import './TVs_Projector.css';

function TVs_Projectors(){
    const[products, setProducts]= useState([])

    async function DisplayTV(){
        try {
            let res = await fetch(`http://localhost:3000/products?category=TV`)
        let data = await res.json()
        setProducts(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        DisplayTV();
    },[]);

    return(
        <>
        <div className="main">
        <div className="box" >
            {products.map((product,i)=>{
                return(
                    <div className='card' key={i}>
                        <p className='title'>{product.title}</p>
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
export default TVs_Projectors;