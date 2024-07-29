import React from "react";
import Title from "./details/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";
import { FaClock, FaHashtag, FaHeart } from "react-icons/fa";
export default function Stories({ story: { news, title } }) {
       const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
    }

  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-2">
        <Splide options={splideOptions}>
          {news.map((get, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center justify-center">
                  <img
                    src={get.img}
                    alt={`img/${i}`}
                    className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex item-center gab-0.5">
                    <FaHeart className="icon-style text-red-500 w-5 h-5" />
                    <span className="text-xs font-bold">{get.like}</span>
                  </div>
                  <div className="flex item-center gab-0.5">
                    <FaClock className="icon-style w-4 h4 text-gray-500" />
                    <span className="text-xs font-bold">{get.time}</span>
                  </div>

                  <div className="flex item-center gab-0.5">
                    <FaHashtag className="icon-style  w-4 h4 text-blue-600" />
                    <span className="font-bold text-blue-600">{get.by}</span>
                  </div>
                </div>
                <div className="grid items-center justify-items-start px-4">
                  <h1 className="text-base font-semibold lg:text-sm">{get.title}</h1>
                  <p className="text-sm text-justify lg:text-sm">{truncate(get.text, {length:50})}</p>
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <a href={get.url} target="_blank" role="button" className="bg-gradient-to-b from-slate-900 to-black text-slate-100
                  shadow-md shadow-black text-center w-full mb-8 py-1.5 button-theme">
                    {get.btn}
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))} 
        </Splide>
      </div>
    </div>
  );
}
