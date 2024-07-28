import React from 'react'
import Title from './details/Title'
import Item from './details/Item'


export default function Product({ifExists, endpoint: {title, items} }) {
   
  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center  gap-7 lg:gab-5 mt-7 ${
          ifExists
            ? " grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        }`}
      >
        {items.map((item, i) => (
          <Item {...item} key={i} ifExists={ifExists}/>
        ))}
      </div>
    </div>
  );
}
