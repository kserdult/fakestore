const initState ={
    cartItems:[],
}

const itemsReducer = (state=initState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: state.cartItems.some(element => element.id === action.payload.cartItems.id) ? state.cartItems.map((element)=> element.id===action.payload.cartItems.id ? {...action.payload.cartItems, count: element.count+1} : element) : [...state.cartItems, {...action.payload.cartItems, count:1}],
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((element)=> element.id===action.payload.cartItems ? {...element, count: element.count+1} : element),
            };
        case "REDUCE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((element)=> element.id===action.payload.cartItems ? {...element, count: element.count-1} : element).filter(item=> item.count>0),
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.cartItems)
            }
        case "REMOVE_ALL":
            return {
                ...state,
                cartItems: action.payload.cartItems,
            }
        default:
            return {...state};
    }
}

export default itemsReducer;