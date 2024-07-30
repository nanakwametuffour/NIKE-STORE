import React from "react";
import { FaChevronLeft, FaXmark } from "react-icons/fa6";

export default function CartNumbers({onCartToggle}) {
  return (
    <div className="bg-white h-11 flex justify-between items-center px-3  sticky w-full top-0 right-0 left-0 ">
      <div className="flex items-center gap-3">
        <div className="grid items-center cursor-pointer" onClick={onCartToggle}>
          <FaChevronLeft className="w-5 h-5 text-slate-900 hover:text-blue-500 stroke-[2] " />
        </div>
        <div className="grid items-center">
          <h1 className="text-base font-medium text-slate-900">
            Your Cart
            <span className="bg-theme-cart rounded py-0.5 text-slate-100 font-normal text-sm">
              (Items)
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="rounded bg-theme-cart text-slate-100 hover:text-blue-500 active:scale-90 p-0.5 stroke-[2]"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
}
