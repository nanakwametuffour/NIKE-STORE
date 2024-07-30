import React, { useEffect } from "react";
import CartItem from "./cart/CartItem";
import CartNumbers from "./cart/CartNumbers";
import Empty from "./cart/Empty";
import { useDispatch, useSelector } from "react-redux";
import { setCloseCart, selectState,selectCartItems, setClearCartItem, setGetTotals, selectTotalAmount, selectTotalQTY } from "../redux/cart/cartSlice";

export default function Cart() {
     const totalAmount = useSelector(selectTotalAmount);
     const totalQTY = useSelector(selectTotalQTY);

   const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
   
   const selectCart = useSelector(selectState)

  useEffect(()=>{
     dispatch(setGetTotals())
  }, [cartItems, dispatch])

   const onCartToggle = () => {
     dispatch(setCloseCart({ cartState: false }));
   };

    const clearItems =()=>{
      dispatch(setClearCartItem())
    }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        selectCart
          ? " opacity-100 visible translate-x-0"
          : " opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`h-screen max-w-xl w-full absolute right-0 blur-effect-theme`}
      >
        <CartNumbers onCartToggle={onCartToggle} clearItems={clearItems}
         totalQTY={totalQTY}
        />
        {cartItems?.length === 0 ? (
          <Empty onCartToggle={onCartToggle}/>
        ) : (
          <div className="">
            <div
              className="flex lg:gab-y-5 overflow-y-scroll
             flex-col items-start justify-start gab-y-7  h-[81vh] scroll-smooth scroll-hidden"
            >
              {cartItems?.map((item, i) => (
                <CartItem item={item} key={i} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-blue-500 text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">
                  Taxes and Shipping Will Calculate At Shipping
                </p>
                <button
                  type="button"
                  className="button-theme bg-blue-500 hover:bg-blue-800 text-white"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
