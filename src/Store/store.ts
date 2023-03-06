import { combineReducers, configureStore, createSelector } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./Reducer/cart.slice";

const combineReducer = combineReducers({
  cart: cartSliceReducer
});
export const store = configureStore({
  reducer: combineReducer,
});

// export const inCartSelector = createSelector(
//     (state:RootState) => state,
//     state => state.cart
// )
store.subscribe(() =>{ console.log(store.getState(),"sss")})

export type AppDispatch = ReturnType<typeof store.dispatch> 

export type RootState= ReturnType<typeof store.getState>

