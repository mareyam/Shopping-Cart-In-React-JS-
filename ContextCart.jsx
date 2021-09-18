import React,{useContext} from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Products from "./Products";
import {CartContext} from "./Cart";

const ContextCard = () => {

    const {item,clearCart, totalItem, totalAmount } = useContext(CartContext);
    if(item.length === 0)
    {
        return(
        <div>
                  <div className="CartMainDiv">
        <header>
            <div className="subdivheading">
                    <div className="subdiv1">
                        <h3 className="CartMainDivh3"><ArrowBackIcon/></h3>
                        <h4 className="CartMainDivh4"> Continue Shopping</h4>
                    </div>
                    <div className="subdiv2">
                        <h3 className="subdiv2h3"><ShoppingCartIcon/></h3>
                    </div>
            </div>
            <hr/>
        <h2 className="CartMainDivh2">Shopping Cart</h2>
        <p className="CartMainDivp1">You have <b>0</b> items in the Shopping Cart</p>
        </header>
        
</div>
        </div>
        );
    }
    return (
        <div className="CartMainDiv">
        <header>
            <div className="subdivheading">
                    <div className="subdiv1">
                        <h3 className="CartMainDivh3"><ArrowBackIcon/></h3>
                        <h4 className="CartMainDivh4"> Continue Shopping</h4>
                    </div>
                    <div className="subdiv2">
                        <h3 className="subdiv2h3"><ShoppingCartIcon/></h3>
                    </div>
            </div>
            <hr/>
        <h2 className="CartMainDivh2">Shopping Cart</h2>
        <p className="CartMainDivp1">You have <b>11</b> items in the Shopping Cart</p>
        </header>
        <div className="cart">
            {
                item.map((preValue) =>
                {
                    return (
                    <div>
                        <Products key={preValue.id} {...preValue}/>
                        
                    </div>
                    )
                }) 
            }
            
        </div>
        <div className="totalCost">
            <h4 className="totalcosth4">Total Cost: <span>{totalAmount}</span></h4>
            <button className="button">Checkout</button>
            <button onClick={()=>clearCart()}className="clear-cart">Clear Cart</button>
        </div>
        
        </div>
    )
}

export default ContextCard;
