import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer } from './Reducers';


// Create context
const Cart = createContext();

faker.seed(99);
// fake data
const products = [...Array(50)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 4, 3, 4, 5]),
}));


const initialCartState = {
    products: products,
    cart: [],
}

const initialFilterState = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
}


// Compponent Provider
const Context = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState)
    return (
        <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>{props.children}</Cart.Provider>
    )
}

export default Context;




// exporting  to use the cart context
export const CartState = () => {
    return useContext(Cart);
}