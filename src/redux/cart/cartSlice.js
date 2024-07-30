import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../../components/cart/CartItem";
import  toast  from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item Quantity Increase`)
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
  },
});

export const { setOpenCart, setCloseCart, setItemToCart } = cartSlice.actions;

export const selectState = (state) => state.cart.cartState;
export const selectCartItems = (state)=>state.cart.cartItems;
export default cartSlice.reducer;
