import React from "react";
import {FaTimes} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/cartActions";



const ItemDetails = ({pathId}) => {

    const navigate= useNavigate();
    const dispatch = useDispatch();

    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("exit")){
            document.body.style.overflow='auto';
            navigate('/');
        }
    }
    const exitDetail = () => {
        document.body.style.overflow='auto';
        navigate('/');
    }

    const AddToCart = () => {
        dispatch(addToCart(pathId));
    }
    
    const {single, isLoading} = useSelector(state=> state.items);


    return(
        <>
            {!isLoading&&(
                <div className="exit h-screen w-screen bg-black" onClick={exitDetailHandler}>
                    <div className=" bg-white fixed lg:w-10/12 h-screen lg:mx-auto">
                        <FaTimes className=" text-3xl absolute text-black hover:text-gray-500 ease-in-out duration-150 right-3 mt-2" onClick={()=> exitDetail()}/>
                        <h1 className=" text-lg text-center pt-8 pb-3">{single.title}</h1>
                        <img src={single.image} className=" object-cover w-5/12 rounded-3xl mx-auto mb-5 sm:w-5/12 md:w-4/12 lg:w-3/12"/>
                        <p className=" mx-auto text-center text-sm py-2 max-h-40 overflow-y-auto">{single.description}</p>
                        <p className=" w-10/12 mx-auto">Rating: {single.rating.rate}/5</p>
                        <div className="fixed bottom-5">
                            <div className=" flex flex-row justify-around items-center w-screen">
                                <p>{single.price}$</p>
                                <button className=" bg-gray-400 p-1 px-2 text-sm rounded-lg text-center hover:bg-black hover:text-white ease-in-out duration-300" onClick={()=>AddToCart()}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ItemDetails;