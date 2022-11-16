import React from 'react';
import { FaTimes } from 'react-icons/fa';
import CheckoutItem from '../Components/CheckoutItem';
import { useSelector } from 'react-redux';
import { removeFromCart, reduceQuantity, increaseQuantity } from '../Redux/Actions/cartActions';

const Checkout = () => {
    //Checkout page

    const {cartItems} = useSelector(state=> state.cart);

    const removeItemFromCart = () =>{
        dispatch(removeFromCart(id));
    }

    const lessQuantity = () =>{
        dispatch(reduceQuantity(id));
    }
    const moreQuantity = () =>{
        dispatch(increaseQuantity(id));
    }

    const sum = cartItems.reduce((accumulator, object) => {
        return accumulator + (object.price*object.count);
    }, 0);

    return (
    <div>
        {cartItems.map((item)=>(
                <CheckoutItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} count={item.count}/>
        ))}
        {sum>1 ? 
        <p>{`Total: ${sum.toFixed(2)}`}</p>
        : <h1>Cart is empty</h1>}
    </div>
    );
}

export default Checkout;