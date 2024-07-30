import React from "react";
import { FaShoppingBag, FaShoppingCart, FaStar } from "react-icons/fa";
import { setItemToCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
export default function Item({
  id,
  color,
  shadow,
  title,
  text,
  img,
  ifExists,
  btn,
  rating,
  price,
}) {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const Item = { id, title, img, color, shadow, price };
    dispatch(setItemToCart(Item));
  };
  return (
    <div
      className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        ifExists ? " justify-items-start" : " justify-items-center"
      }  rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={` ${
          ifExists ? "justify-items-start" : " justify-items-center"
        }`}
      >
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {text}
        </p>

        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80 px-1 rounded">
            <h3 className="flex items-center text-black text-sm font-medium blur-effect-theme">
              ${price}
            </h3>
          </div>

          <div className="flex items-center gap-1">
            <FaStar className="icon-style text-yellow-500 w-4 h4 md:w-5 md:h-5" />
            <h3 className="flex items-center md:text-sm font-normal text-slate-100">
              {rating}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <button
            type="button"
            className="icon-style text-slate-900 bg-white p-1 opacity-900 blur-effect-theme button-theme shadow-slate-200"
            onClick={(e) => onAddToCart()}
          >
            <FaShoppingBag />
          </button>
          <button
            type="button"
            className="icon-style text-slate-900 bg-white  w-full opacity-900 blur-effect-theme button-theme shadow-slate-200 font-medium"
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? " absolute top-5 right-1" : " justify-center"
        }`}
      >
        <img
          src={img}
          alt={`img/item-img${id}`}
          className={`transitions-theme hover:-rotate-12 ${
            ifExists
              ? " h-auto w-64 lg:w-56 md:48 -rotate-[35deg]"
              : "h-36 w-64 "
          }`}
        />
      </div>
    </div>
  );
}
