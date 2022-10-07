import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartReducer";
import userReducer from "./reducer/userReducer";

export const store = configureStore({
    reducer: {
        cartReducer: cartReducer,
        userReducer: userReducer,
    }
})