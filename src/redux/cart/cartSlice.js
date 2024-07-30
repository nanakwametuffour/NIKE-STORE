import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../../components/cart/CartItem";
import  toast  from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
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
        toast.success(`Item Quantity Increase`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Removed From Cart`);
    },
    setIncreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item Quantity Increase`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item Quantity Decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItem: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Clear`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem)=> {
        const { price, cartQuantity } = cartItem;
        const totalPrice = price * cartQuantity;

        cartTotal.totalAmount += totalPrice;
        cartTotal.totalQTY += cartQuantity;

        return cartTotal;
      }, {
        totalAmount: 0,
        totalQTY: 0,
      });

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  

    
  },
});

export const { setOpenCart, setCloseCart, setItemToCart,setRemoveItem, setIncreaseItem,setDecreaseItem,setClearCartItem, setGetTotals } = cartSlice.actions;

export const selectState = (state) => state.cart.cartState;
export const selectCartItems = (state)=>state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;


export default cartSlice.reducer;
