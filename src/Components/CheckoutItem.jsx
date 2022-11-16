import React from "react";
import {FaTimes} from "react-icons/fa"
import { useDispatch } from "react-redux";
import {removeFromCart, reduceQuantity, increaseQuantity} from '../Redux/Actions/cartActions'

const CheckoutItem = ({id, title, count, image, price}) => {
    
    const dispatch = useDispatch(); 
    
    const removeItemFromCart = () =>{
        dispatch(removeFromCart(id));
    }
    
    const lessQuantity = () =>{
        dispatch(reduceQuantity(id));
    }
    const moreQuantity = () =>{
        dispatch(increaseQuantity(id));
    }
    
    return(
        <div className="flex flex-row my-5 ml-2 bg-gray-600 rounded-xl w-11/12">
            <img src={image} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex flex-col ml-4">
                <h1>{title}</h1>
                <div className="flex flex-row items-center">
                    <button className="rounded-full bg-gray-400 w-7 pb-1 text-center hover:bg-black hover:text-white ease-in-out duration-300" onClick={()=>lessQuantity()}>-</button>
                    <p>{count}</p>
                    <button className="rounded-full bg-gray-400 w-7 pb-1 text-center hover:bg-black hover:text-white ease-in-out duration-300" onClick={()=>moreQuantity()}>+</button>
                    <p>Price: {(count*price).toFixed(2)}</p>
                    <FaTimes onClick={()=>removeItemFromCart()} className=" text-lg cursor-pointer hover:text-red-600 ease-in-out duration-300" />
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;