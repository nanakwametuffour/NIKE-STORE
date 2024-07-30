import React from "react";
import CartItem from "./cart/CartItem";
import CartNumbers from "./cart/CartNumbers";
import Empty from "./cart/Empty";
import { useDispatch, useSelector } from "react-redux";
import { setCloseCart, selectState } from "../redux/cart/cartSlice";

export default function Cart() {
   const dispatch = useDispatch();
   const selectCart = useSelector(selectState)
   const onCartToggle = () => {
     dispatch(setCloseCart({ cartState: false }));
   };
  return ( 
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${selectCart ? " opacity-100 visible translate-x-0" : " opacity-0 invisible translate-x-8"}`}>
      <div className={`h-screen max-w-xl w-full absolute right-0 blur-effect-theme`}>
         <CartNumbers onCartToggle={onCartToggle}/>
         <CartItem/>
         <Empty/>
      </div>
    </div> 
  );
}
