import React,{createContext, useReducer, useEffect} from 'react'
import {Items} from "./Items";
import ContextCard from "./ContextCard";
import {reducer} from "./reducer";

export const CartContext = createContext();

const initialState = {
    item: Items,
    totalAmount: 0,
    totalItem: 0,    
}
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) =>
    {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };
    const clearCart = () => 
    {
        return dispatch({
            type:"CLEAR_CART"
        });
    };
    const increment = (id) =>
    {
        return dispatch ({
            type:"INCREMENT",
            payload: id,
        });
    };
    const decrement = (id) =>
    {
        return dispatch ({
            type:"DECREMENT",
            payload:id,
        });
    };
    useEffect(() =>
    {
        dispatch({type: "GET_TOTAL"});
    },[state.item]);

    return (
        <div>
            <CartContext.Provider value={{... state, removeItem,clearCart,increment,decrement}}>
                <ContextCard/>
            </CartContext.Provider>
        </div>
    )
  
}

export default Cart;
