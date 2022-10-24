export const cartReducer = (state, action) => {

    if (action.type === "ADD-TO-CART") {
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }

    if (action.type === "REMOVE-FROM-CART") {
        return { ...state, cart: state.cart.filter(ele => ele.id !== action.payload.id) };
    }


    if (action.type === "CHANGE-QTY") {
        return {
            ...state, cart: state.cart.filter((item) => item.id === action.payload.id ? (item.qty = action.payload.qty) : (item.qty))
        };
    };


    return state;
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SORT-BY-PRICE":
            return { ...state, sort: action.payload };
        case "FILTER-BY-STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER-BY-DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "FILTER-BY-RATING":
            return { ...state, byRating: action.payload };
        case "FILTER-BY-SEARCH":
            return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: ""
            }
        default:
            return state
    }

}


