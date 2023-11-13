import { configureStore } from '@reduxjs/toolkit';
import navReducer from "../reducers/navSlice";
import productReducer from '../reducers/proudctSlice'
import cartReducer from '../reducers/cart';
const store = configureStore({
    reducer: {
        nav: navReducer,
        product : productReducer,
        cart:cartReducer
    },
});

export default store;


