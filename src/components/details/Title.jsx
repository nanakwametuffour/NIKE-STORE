import React from 'react'

export default function Title({title}) {
  return (
    <div className='grid items-center'>
        <h1 className=' text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-xl'>{title}</h1>
    </div>
  )
}
