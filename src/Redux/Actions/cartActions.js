import axios from "axios";

export const addToCart = (id) => async (dispatch) => {
    const addItem = await axios.get(`https://fakestoreapi.com/products/${id}`);
    
    dispatch({
        type:"ADD_TO_CART",
        payload: {
            cartItems: addItem.data,
        }
    })
}

export const reduceQuantity = (id) => async (dispatch) => {
    const reduceId= id;
    dispatch({
        type:"REDUCE_QUANTITY",
        payload: {
            cartItems: reduceId,
        }
    });
}

export const increaseQuantity = (id) => async (dispatch) => {
    const reduceId= id;
    dispatch({
        type:"INCREASE_QUANTITY",
        payload: {
            cartItems: reduceId,
        }
    });
}

export const removeFromCart = (id) => async (dispatch) => {    
    const removeItem = id;
    dispatch({
        type:"REMOVE_FROM_CART",
        payload: {
            //cartItems: cartItems.splice(indexOf(removeItem.data),1),
            cartItems: removeItem,
        }
    });
}

export const removeAll = () => async (dispatch) => {    
    // dispatch({
    //     type:"LOADING_DETAIL",
    // });
    dispatch({
        type:"REMOVE_ALL",
        payload: {
            cartItems: [],
        }
    });
}