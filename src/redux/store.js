import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice.js";

export const store = configureStore({
  reducer: {
     cart: cartSlice
  },
});


export default store;