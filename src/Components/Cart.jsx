import React, {useState} from "react";
import CartItem from "./CartItem";
import {BsCart} from 'react-icons/bs'
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeAll } from "../Redux/Actions/cartActions";

//Styling and Animation



const Cart = () => {
    //Cart Items
    const [dropdown, setDropdown] = useState(false);
    const {cartItems} = useSelector(state=> state.cart);

    const dispatch = useDispatch();

    const RemoveAllItem = () =>{
        dispatch(removeAll());
    }

    return (
        <div onMouseEnter={()=> setDropdown(true)} onMouseLeave={()=> setDropdown(false)}>
            <Link to="/checkout"><BsCart className=" text-3xl fixed right-5 top-1 cursor-pointer z-20"/></Link>
        {dropdown && cartItems.length>0&&
        <div className=" pt-10 w-6/12 right-0 top-1 fixed max-h-screen overflow-y-scroll hidden z-10 lg:block">
            {cartItems.map((item)=>(
                <CartItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} count={item.count}/>
            ))}
            <button onClick={()=>RemoveAllItem()}>REMOVE ALL</button>
        </div>
        }
        </div>
    );
}

export default Cart;