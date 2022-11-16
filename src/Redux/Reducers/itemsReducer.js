const initState ={
    items : [],
    single: [],
}

const itemsReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_ITEMS":
            return {
                ...state,
                items: action.payload.items,
            };
        case "FETCH_SINGLE":
            return {
                ...state,
                single: action.payload.single,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state};
    }
}

export default itemsReducer;