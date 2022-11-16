import axios from "axios";

export const loadItems = () => async (dispatch) => {
    const fetchedItems = await axios.get("https://fakestoreapi.com/products");
    
    dispatch({
        type:"FETCH_ITEMS",
        payload: {
            items: fetchedItems.data,
        }
    })
}

export const loadSingle = (id) => async (dispatch) => {    
    dispatch({
        type:"LOADING_DETAIL",
    });

    const fetchedSingle = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({
        type:"FETCH_SINGLE",
        payload: {
            single: fetchedSingle.data,
        }
    });
}

