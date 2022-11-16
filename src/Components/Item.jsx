//React
import React from 'react';
import { Link } from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';
import { loadSingle } from '../Redux/Actions/itemsActions';
import { addToCart } from '../Redux/Actions/cartActions';


const Item = ({id,image,name,price}) => {
    const pathId = id.toString();
    const dispatch = useDispatch();
    //Load Details for item
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadSingle(id));
    };

    const AddToCart = () => {
        dispatch(addToCart(id));
    }

    return(
        <div className='flex flex-col w-5/12 shadow-xl rounded-lg justify-around lg:w-3/12'>
            <Link to={`/${id}`}>
                <div onClick={loadDetailHandler}>
                    <h1 className=' text-sm text-center w-10/12 mx-auto my-2'>{name}</h1>
                    <img src={image} className='w-10/12 h-40 mx-auto object-cover lg:w-60 lg:h-80'/>
                </div>
            </Link>
                <div className=' flex flex-row justify-around items-center py-2'>
                    <p>{price}$</p>
                    <button className=" bg-gray-400 p-1 px-2 text-sm rounded-lg text-center hover:bg-black hover:text-white ease-in-out duration-300" onClick={()=> AddToCart()}>Add to Cart</button>
                </div>
        </div>
    );
}

export default Item;