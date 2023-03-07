import { createSlice } from "@reduxjs/toolkit"
import { cartState, Products } from "../../Types/types";


const initialState:cartState={
    cart:[]
}

const cartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart:(state,{payload}) => {
            return {...state,cart:[...state.cart,payload]}
        },
        removeCart:(state,{payload}) => {
            let updated_cart =state.cart.filter(element =>
                element.id !== payload.id        
        )
        return {...state,cart:updated_cart}       
        },
        clearCart:() => {
           return initialState
        }
    }
})

export const cartSliceReducer = cartSlice.reducer
export const {setCart, removeCart, clearCart} = cartSlice.actions