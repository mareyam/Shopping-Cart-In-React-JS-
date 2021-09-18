import React,{useContext} from 'react'
import { CartContext } from './Cart';
import Items from "./Items";


const Products = ({id,img,title,color,price,quantity}) => {
   const {removeItem, increment,decrement} = useContext(CartContext);

    return (
        <div className="ProductsMainDiv">
            <div className="cart-items-container">
                <div className="items-info">
                    <div className="product-img">
                        <img src={img}/>
                    </div>
                    <div className="title">
                        <h2>{title}</h2>
                        <p>{color}</p>
                    </div>
                    <div className="add-minus-quantity">
                        <p className="p1"onClick={() => increment(id)}>+</p>
                        <input type="text" placeholder={quantity} />
                        <p className="p2"onClick={() => decrement(id)}>-</p>
                    </div>
                    <div className="price">
                        <h3>Rs.{price}</h3>
                    </div>
                    <div className="remove">
                        <p className="remButton"onClick={() => removeItem(id)}>x</p>
                    </div>
                    
                </div>
              
            </div> 
            
        </div>
       
    )
}

export default Products
