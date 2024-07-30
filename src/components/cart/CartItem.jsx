import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

export default function CartItem({
  item: { id, text, title, img, price, color, cartQuantity, shadow },
}) {
  return (
    <div className="flex items-center justify-between w-full px-5">
      <div className="flex items-center gap-5 justify-between w-full mt-4">
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded hover:scale-110 p-3 transition-all duration-100 ease-in-out`}
        >
          <div className="">
            <img
              src={img}
              alt={`img/cart-item/ ${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
          </div>
        </div>

        <div className="grid items-center gap-4">
          <div className="grid items-center">
            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
              {title}
            </h1>
            <p className="">{text}</p>
          </div>

          <div className="flex items-center justify-around w-full">
            <button
              type="button"
              className="bg-theme-cart text-slate-100 rounded-full"
            >
              <FaMinus className="w-5 h-5" />
            </button>

            <span
              type="button"
              className=" bg-theme-cart rounded-full text-slate-100 font-medium lg:text-xs w-7 h-6 lg:w-6 lg:h5 flex items-center justify-center"
            >
              {cartQuantity}
            </span>

            <button
              type="button"
              className="bg-theme-cart text-slate-100 rounded-full  flex items-center"
            >
              <FaPlus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid items-center gap-4">
          <div className="">
            <h1 className="font-semibold">${price * cartQuantity}</h1>
          </div>
          <div className="">
            <button
              type="button"
              className={`bg-gradient-to-b ${color} ${shadow}  rounded hover:scale-110 p-1 transition-all duration-100 ease-in-out text-gray-300`}
            >
              <FaTrash className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
