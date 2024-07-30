import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
 import { useDispatch, useSelector } from "react-redux";
import { filter } from "lodash";
import { selectTotalQTY, setOpenCart } from "../redux/cart/cartSlice";

export default function Header() {
  const [sticky, setStick] = useState(false);

  const dispatch = useDispatch();
   const totalQTY = useSelector(selectTotalQTY);
  const onCartToggle = ()=>{
      dispatch(setOpenCart({cartState: true}))
  }
  const headerScroll = () => {
    if (window.scrollY > 30) {
      setStick(true);
    } else {
      setStick(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerScroll);

    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  }, []);
  return (
    <header
      className={
        !sticky
          ? " absolute top-7 right-0 left-0 opacity-100 z-50"
          : "fixed top-0 right-0 left-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
      }
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo/img"
            className={`w-16 h-auto ${sticky && "filter brightness-0"}`}
          />
        </div>
        <u className="flex items-center justify-center gap-3">
          <li className="grid items-center">
            <FaMagnifyingGlass
              className={`icon-style ${
                sticky && "text-slate-900 transition-all duration-300"
              }`}
            />
          </li>
          <li className="grid items-center">
            <FaHeart
              className={`icon-style ${
                sticky && "text-slate-900 transition-all duration-300"
              }`}
            />
          </li>
          <li className="grid items-center">
            <button
              type="button"
              className="border-none outline-none active:scale-110 transition-all duration-300 relative"
            >
              <FaShoppingBag onClick={onCartToggle}
                className={`icon-style ${
                  sticky && "text-slate-900 transition-all duration-300"
                }`}
              />
            </button>
            <div
              className={` absolute top-3  sm:top-5 xsm:top-3 bg-blue-600 text-white rounded-full w-4 h-4 shadow shadow-slate-300 text-[0.65rem]leading-tight font-medium flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 `}
            >
              {totalQTY}
            </div>
          </li>
        </u>
      </nav>
    </header>
  );
}
