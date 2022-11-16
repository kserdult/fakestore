import React from "react";

//Redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Actions/cartActions";
import { reduceQuantity } from "../Redux/Actions/cartActions";
import { increaseQuantity } from "../Redux/Actions/cartActions";


//Styling and Animation
import { useEffect } from "react";

const CartItem = ({id,title,price, image, count}) => {
    
    const dispatch = useDispatch();

    // useEffect(()=>{

    // },[]);

    const removeItemFromCart = () =>{
        dispatch(removeFromCart(id));
    }

    const lessQuantity = () =>{
        dispatch(reduceQuantity(id));
    }
    const moreQuantity = () =>{
        dispatch(increaseQuantity(id));
    }

    return (
        <div className=" bg-gray-800 rounded-sm flex flex-row pl-3">
            <img src={image} className=" w-14 h-14 object-cover" />
            <div className="ml-3">
                    <h1>{title}</h1>
                <div>
                    <p>{price}$ sum: {(price*count).toFixed(2)}$</p>
                </div>
                <div className="flex flex-row py-3">
                    <button className="rounded-full bg-gray-400 w-7 pb-1 mr-2 text-center hover:bg-black hover:text-white ease-in-out duration-300" onClick={()=>lessQuantity()}>-</button>
                    <p>{count}</p>
                    <button className="rounded-full bg-gray-400 w-7 pb-1 mx-2 text-center hover:bg-black hover:text-white ease-in-out duration-300" onClick={()=>moreQuantity()}>+</button>
                    <button onClick={()=>removeItemFromCart()}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;