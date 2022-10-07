import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartValues: [],
    totalPrice: 0
}

const cartReducer = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        incrementcart: (state, action) => {
            state.cartValues.push(action.payload)
            console.log(action.payload, '...')
            const priceArray = state.cartValues.map(obj => obj.productPrice)
            state.totalPrice = priceArray.reduce((a,b) => a+b)
        },
        decrementcart: (state, action) => {
            const index = state.cartValues.findIndex(obj => obj.productName === action.payload.productName)
            if(index > -1){
                state.cartValues.splice(index, 1)
            }

            const priceArray = state.cartValues.map(obj => obj.productPrice)
            state.totalPrice = priceArray.reduce((a,b) => a+b)
        }
    }
})

export const { incrementcart, decrementcart } = cartReducer.actions

export default cartReducer.reducer