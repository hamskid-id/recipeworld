import { configureStore } from "@reduxjs/toolkit";
import cart_Slice from './cartSlice';
import auth_Slice from './authSlice';
import product_Slice from "./productslice";
import notificationSlice from "./notificationSlice";

const store = configureStore({
    reducer:{
        cart: cart_Slice.reducer,
        auth: auth_Slice.reducer,
        notification: notificationSlice.reducer,
        product: product_Slice.reducer
    }
})

export default store;